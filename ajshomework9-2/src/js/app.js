/* eslint-disable no-console */
import ArrayBufferConverter, { getBuffer } from './ArrayBufferConverter';

const arrayBuffer = getBuffer();
const converter = new ArrayBufferConverter();
converter.load(arrayBuffer);
console.log(converter);
console.log(converter.toString());
