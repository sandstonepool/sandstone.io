export default function (department = "info", subject = "General Enquiry") {
    return `mailto:${department}@sandstone.io?subject=${subject}`
}