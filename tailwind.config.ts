import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        header: '1fr auto 1fr',
      },
    },
  },
}
