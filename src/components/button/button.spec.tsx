import { QwikCityMockProvider } from '@builder.io/qwik-city'
import { createDOM } from '@builder.io/qwik/testing'
import { expect, test } from 'vitest'
import { MyButton } from './button'

test(`[MyButton]: should fire onClick$ event`, async () => {
  const { render, userEvent } = await createDOM()
  const signal = { value: 0 }

  await render(
    <QwikCityMockProvider>
      <MyButton onClick$={() => signal.value++}></MyButton>
    </QwikCityMockProvider>,
  )

  await userEvent('button', 'click')
  expect(signal.value).toEqual(1)
})
