export default (text: string) => {
  // I Should remove special chars like ą,ę, and from other languages like for example french
  // But in task data i have not received car names with this signs, so i've decided, that i don't need this
  return text.trim().replace(/ /g, '_')
}
