import { createStorageItem } from '../utils/storage.utils';

const deviceIdStorageItem = createStorageItem<string>('userId');

export default deviceIdStorageItem;
