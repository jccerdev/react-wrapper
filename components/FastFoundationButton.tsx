import { provideFASTDesignSystem } from '@microsoft/fast-components';
import { wcButton } from './FastFoundationWcButton';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const FastFoundationButton = wrap(wcButton());
