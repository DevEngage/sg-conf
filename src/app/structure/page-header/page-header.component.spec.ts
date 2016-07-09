/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';

describe('Component: PageHeader', () => {
  it('should create an instance', () => {
    let component = new PageHeaderComponent();
    expect(component).toBeTruthy();
  });
});
