/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

/* eslint-env jest */

'use strict';

const React = require('react');
const View = require('../../View/View');

const requireNativeComponent = require('../../../ReactNative/requireNativeComponent');

import type {HostComponent} from '../../../Renderer/shims/ReactNativeTypes';

const RCTScrollView: HostComponent<mixed> = requireNativeComponent<mixed>(
  'RCTScrollView',
);

const ScrollViewComponent: $FlowFixMe = jest.genMockFromModule('../ScrollView');

class ScrollViewMock extends ScrollViewComponent {
  render(): React.Element<typeof RCTScrollView> {
    return (
      <RCTScrollView {...this.props}>
        {this.props.refreshControl}
        <View>{this.props.children}</View>
      </RCTScrollView>
    );
  }
}

module.exports = ScrollViewMock;
