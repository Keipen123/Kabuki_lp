export const state = () => ({
  menuOpen: false
})

export const getters = {
  menuOpen(state) {
    return state.menuOpen
  }
}

export const mutations = {
  openMenu(state) {
    state.menuOpen = true
  },
  closeMenu(state) {
    state.menuOpen = false
  }
}