import {BlockElementIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Blog Details')
    .icon(BlockElementIcon)
    .schemaType('blogDetails')
    .child(S.documentTypeList('blogDetails'))
)
