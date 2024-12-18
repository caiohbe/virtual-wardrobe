export default function formatSelected(list, desiredOrder) {
  const orderMap = new Map(desiredOrder.map((item, index) => [item, index]))
  list.sort((a, b) => orderMap.get(a) - orderMap.get(b))

  let output = ""

  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      output += list[i]
    } else {
      output += list[i] + ", "
    }
  }

  return output
}
