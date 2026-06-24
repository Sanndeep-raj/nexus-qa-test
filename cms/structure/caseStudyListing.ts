import {BoltIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Case Study Listing')
    .icon(BoltIcon)
    .schemaType('caseStudyListing')
    .child(S.editor().title('Case Study Listing').schemaType('caseStudyListing').documentId('caseStudyListing'))
)