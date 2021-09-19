const rage = (from, to, step = 1) => {
  let i = from
  const ranges = []

  while (i <= to) {
    ranges.push(i)
    i += step
  }

  return ranges
}

export default rage
