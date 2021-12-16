import {
  provideFASTDesignSystem,
  fastButton,
} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const FastComponentButton = wrap(fastButton());
