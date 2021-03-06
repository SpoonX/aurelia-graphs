import {Config} from '../config';
import {Container} from 'aurelia-dependency-injection';

export function chart(namespace, type) {
  let config = Container.instance.get(Config);

  return function(target) {
    config.registerChart(namespace, type, target);
  };
}
