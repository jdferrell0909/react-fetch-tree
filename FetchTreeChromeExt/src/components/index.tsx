import React from 'react';
import { render } from 'react-dom';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Viz from './treeViz';
import './sandbox-styles.css';

render(
  <ParentSize>{({ width, height }) => <Viz width={width} height={height * 0.9} />}</ParentSize>,
  document.getElementById('app'),
);
