import React from 'react';
import { render } from 'react-native-testing-library';
import debugMessage, { DebugType } from '../debugMessages';
import RenderHTMLDebug from '../RenderHTMLDebug';

function createOutdatedPropTest(
  propName: string,
  propValue: any,
  debugName: DebugType
) {
  it(`should warn when outdated ${propName} prop has been provided`, () => {
    console.warn = jest.fn();
    render(
      //@ts-ignore
      React.createElement(RenderHTMLDebug, {
        [propName]: propValue,
        debug: false,
        contentWidth: 10
      })
    );
    expect(debugMessage[debugName]).toBeDefined();
    expect(console.warn).toHaveBeenNthCalledWith(1, debugMessage[debugName]);
  });
}

describe('RenderHTMLDebug', () => {
  createOutdatedPropTest('html', 'hello world', 'outdatedHtmlProp');
  createOutdatedPropTest('uri', 'https://domain.com', 'outdatedUriProp');
  createOutdatedPropTest(
    'listsPrefixesRenderers',
    {},
    'outdatedListPrefixRenderersProps'
  );
  createOutdatedPropTest(
    'imagesInitialDimensions',
    {},
    'outdatedImagesDimensions'
  );
  createOutdatedPropTest('onLinkPress', [], 'outdatedOnLinkPressProp');
  createOutdatedPropTest(
    'enableExperimentalPercentWidth',
    false,
    'outdatedEnableExperimentalPercentWidth'
  );
  createOutdatedPropTest(
    'ignoreNodesFunction',
    () => {},
    'outdatedIgnoreNodesFunction'
  );
  createOutdatedPropTest('alterNode', () => {}, 'outdatedAlterNode');
  createOutdatedPropTest('alterData', () => {}, 'outdatedAlterData');
  createOutdatedPropTest('alterChildren', () => {}, 'outdatedAlterChildren');
  createOutdatedPropTest(
    'computeImagesMaxWidth',
    () => {},
    'outdatedComputeImagesMaxWidth'
  );
  it('should warn of allowedStyles items with hyphens', () => {
    console.warn = jest.fn();
    render(
      //@ts-ignore
      React.createElement(RenderHTMLDebug, {
        //@ts-expect-error
        allowedStyles: ['hello-world'],
        debug: false,
        contentWidth: 10
      })
    );
    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it('should warn of ignoredStyles items with hyphens', () => {
    console.warn = jest.fn();
    render(
      //@ts-ignore
      React.createElement(RenderHTMLDebug, {
        //@ts-expect-error
        ignoredStyles: ['hello-world'],
        debug: false,
        contentWidth: 10
      })
    );
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});
