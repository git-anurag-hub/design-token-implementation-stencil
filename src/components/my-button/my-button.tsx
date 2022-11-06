import { Component, Host, h } from '@stencil/core';
import tokens from 'lyne-design-tokens/dist/js/tokens.json';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  render() {
    return (
      <Host>
        <slot></slot>
        <div
          class="button"
          style={{
            backgroundColor: tokens['color-black-alpha-60'],
          }}
        >
          Button
        </div>
      </Host>
    );
  }
}
