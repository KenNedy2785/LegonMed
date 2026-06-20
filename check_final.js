import { CHEMO_MODS } from './src/data/chemo_data.js';
console.log(`📊 Validated Total Modules: ${CHEMO_MODS.length}`);
CHEMO_MODS.forEach((m, index) => {
  console.log(`  ${index + 1}. [ID: ${m.id || 'MISSING'}] ${m.title || 'Untitled Module'}`);
});
