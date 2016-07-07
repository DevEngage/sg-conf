/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HotelComponent } from './hotel.component';

describe('Component: Hotel', () => {
  it('should create an instance', () => {
    let component = new HotelComponent();
    expect(component).toBeTruthy();
  });
});
