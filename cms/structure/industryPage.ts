import { StackCompactIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Industry')
    .icon(StackCompactIcon)
    .schemaType('industryPage')
    .child(S.editor().title('Industry').schemaType('industryPage').documentId('industryPage'))
)