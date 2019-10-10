const randomize = (jacare, randomizeSlots = Array.from(jacare.keys())) => {
  return jacare.map((val, index) => {
    return randomizeSlots.includes(index) ? Math.floor(Math.random() * jacare.length) : val
  })
};


