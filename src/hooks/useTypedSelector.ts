import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../core/configureStore'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
