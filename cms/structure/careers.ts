import {SyncIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Careers Apply')
    .icon(SyncIcon)
    .schemaType('careers')
    .child(S.documentTypeList('careers'))
)
