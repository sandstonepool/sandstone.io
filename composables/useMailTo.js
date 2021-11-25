export function mailTo(department = "info", subject = "General Enquiry") {
    return `mailto:${department}@sandstone.io?subject=${subject}`
}