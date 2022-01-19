export const addOpacityToColor = (color: number, opacity: number) => {
    const opacityHex = Math.round(opacity * 255).toString(16)
    return `${color}${opacityHex}`
  }