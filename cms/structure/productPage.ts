import { ProjectsIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Products')
    .icon(ProjectsIcon)
    .schemaType('productPage')
    .child(S.editor().title('Products').schemaType('productPage').documentId('productPage'))
)