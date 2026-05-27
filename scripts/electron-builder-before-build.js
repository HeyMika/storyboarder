exports.default = async function beforeBuild (context) {
  console.log('  + scripts/electron-builder-before-build.js')
  return true
}
