import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * Generates a PDF from a DOM element reference
 * @param {HTMLElement} elementRef - The DOM element to capture
 * @param {Object} options - Configuration options
 * @param {string} options.filename - Name of the downloaded PDF file
 * @param {number} options.margin - Margin in mm (default: 10)
 * @param {Function} options.onProgress - Callback function for progress updates
 * @returns {Promise<{success: boolean, error?: Error}>}
 */
export async function generatePDF(elementRef, options = {}) {
  const {
    filename = 'my-year-plan.pdf',
    margin = 10,
    onProgress = () => {},
  } = options

  try {
    // Notify that we're starting the capture process
    onProgress('capturing')

    // Capture the element as a canvas with high quality settings
    const canvas = await html2canvas(elementRef, {
      scale: 2, // Higher resolution for better quality
      useCORS: true, // Handle any external images
      logging: false, // Disable console logs
      backgroundColor: '#ffffff', // Ensure white background
      windowWidth: 794, // A4 width in pixels at 96 DPI
    })

    // Notify that we're generating the PDF
    onProgress('generating')

    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    // A4 dimensions in mm
    const pageWidth = 210
    const pageHeight = 297
    const contentWidth = pageWidth - (margin * 2)
    const contentHeight = pageHeight - (margin * 2)

    // Calculate scaling to fit content width
    const imgWidth = contentWidth
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // Calculate number of pages needed
    const totalPages = Math.ceil(imgHeight / contentHeight)

    // Add each page to the PDF
    for (let page = 0; page < totalPages; page++) {
      if (page > 0) {
        pdf.addPage()
      }

      // Calculate the portion of the image for this page
      const sourceY = page * (canvas.height / totalPages)
      const sourceHeight = canvas.height / totalPages

      // Create a temporary canvas for this page's content
      const pageCanvas = document.createElement('canvas')
      pageCanvas.width = canvas.width
      pageCanvas.height = sourceHeight

      const ctx = pageCanvas.getContext('2d')
      ctx.drawImage(
        canvas,
        0, sourceY, // Source x, y
        canvas.width, sourceHeight, // Source width, height
        0, 0, // Dest x, y
        canvas.width, sourceHeight // Dest width, height
      )

      const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.95)

      // Add image to PDF page
      pdf.addImage(
        pageImgData,
        'JPEG',
        margin,
        margin,
        contentWidth,
        contentHeight
      )

      // Add page numbers at the bottom
      pdf.setFontSize(10)
      pdf.setTextColor(150)
      pdf.text(
        `Page ${page + 1} of ${totalPages}`,
        pageWidth - margin - 25,
        pageHeight - 5
      )
    }

    // Notify that we're downloading
    onProgress('downloading')

    // Trigger the download
    pdf.save(filename)

    // Notify completion
    onProgress('complete')

    return { success: true }

  } catch (error) {
    console.error('PDF generation failed:', error)
    onProgress('error')
    return { success: false, error }
  }
}
