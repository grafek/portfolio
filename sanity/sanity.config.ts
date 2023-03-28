import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  dataset: 'production',
  projectId: 'y1eewb5s',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
