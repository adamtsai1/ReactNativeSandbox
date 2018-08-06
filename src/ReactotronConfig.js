import Reactotron, { overlay } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
    .configure()
    .use(reactotronRedux())
    .useReactNative()
    .use(overlay())
    .connect();
