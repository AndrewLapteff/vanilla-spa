const fileRegex = /\.(template)$/

export default function templatePlugin() {
  return {
    name: 'template-plugin',
    transform(fileContent, fileName) {
      if (fileRegex.test(fileName)) {
        return {
          code: `export default function template(props = {}){return \`${fileContent}\`}`,
          map: null
        }
      }
    }
  }
}