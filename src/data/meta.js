require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'ZipLiner',
    url: META_URL || '',
    description: META_DESC || 'What does the future of the ZipCode Wilmington community look like?',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#34AB7D',
    email: META_EMAIL || 'info@zipliner.org',
    telephone: META_TELEPHONE || undefined,
    dateFormat: 'dd LLLL yyyy'
}
