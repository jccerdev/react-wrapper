import {
  Button as FoundationButton,
  ButtonOptions,
  ElementDefinitionContext,
} from '@microsoft/fast-foundation';
import { html, attr, css, ElementStyles } from '@microsoft/fast-element';

const template = html<Button>`
<button>${(x) => x.label}</button>`;

export const buttonStyles: (
  context: ElementDefinitionContext,
  definition: ButtonOptions
) => ElementStyles = (
  context: ElementDefinitionContext,
  definition: ButtonOptions
) =>
  css`
    button {
      background-color: blue;
      color: white;
    }
  `;

/**
 * @internal
 */
export class Button extends FoundationButton {
  @attr label?: string;
}

//export const wcButton = Button.compose<ButtonOptions>({
export const wcButton = Button.compose({
  baseName: 'enhanced-fast-foundation-button-2',
  baseClass: FoundationButton,
  template: template,
  styles: buttonStyles,
  shadowOptions: {
    delegatesFocus: true,
  },
});
