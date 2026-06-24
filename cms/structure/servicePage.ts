import { SparklesIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Services')
    .icon(SparklesIcon)
    .schemaType('servicePage')
    .child(S.editor().title('Services').schemaType('servicePage').documentId('servicePage'))
)