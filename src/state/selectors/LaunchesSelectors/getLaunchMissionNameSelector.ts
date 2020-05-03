import { Store } from '../../../../models/state/store';
import createCachedSelector from 're-reselect';
import getLaunchSelector from './getLaunchSelector';

export default createCachedSelector(
    [getLaunchSelector, (_: Store, flightNumber: number) => flightNumber],
    (launch, flightNumber): string => (launch ? launch.mission_name : '')
)((_: Store, flightNumber: number) => flightNumber);
