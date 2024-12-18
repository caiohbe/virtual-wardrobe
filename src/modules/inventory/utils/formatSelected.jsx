export default function formatSelected(list, options) {
  const desiredOrder = []

  if (!options[0].name) {
    desiredOrder.push(...options)
  } else {
    options.forEach((element) => {
      desiredOrder.push(element.name)
    })
  }

  const orderMap = new Map(desiredOrder.map((item, index) => [item, index]))
  list.sort((a, b) => orderMap.get(a) - orderMap.get(b))

  let sortedList = ""

  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      sortedList += list[i]
    } else {
      sortedList += list[i] + ", "
    }
  }

  return sortedList
}
