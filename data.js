window.REVIEW = {
"sheets": [
{
"src": "img/sheet_0.png",
"w": 2047,
"h": 1354
}
],
"built": "2026-10-30T14:34",
"notes": "Approved 2026-10-29: the palette, proof assets, painted harbour, villagers and animals. Six new colour ramps were just added as drafts (hair-grey, brick, moss, flower-purple, spruce-dry, plastic-grey) and aren't used by any asset yet.\n\nNEW (paint-over experiment): \"Painted maps\" at the top shows the harbour as one bespoke painting instead of tiles, in calm water.\nNEW (M1 art, for review):\n- The harbour is now the full M1 map, 960\u00d7544. It adds the family's blue house with its garden across the lane, a road south, the fish buyer's truck, two boarded-up houses (future restoration lots), a west headland, an east cove and a pond.\n- The family kitchen interior.\n- The playable siblings (a man and a woman, each with hair and skin options and seated boat poses) and Mom. Their cards are under chr.sibling_m, chr.sibling_f and chr.mom.\n\nNEW (moving sprites): the harbour now has life on a 38-second loop:\n- The fisherman walks to the wharf, the older woman tends her clothesline and goes home, and the youth stands on the lane looking at their phone.\n- Three sheep graze, three hens peck, and a collie trots the lane and sits.\n- Gulls perch on the stage and the flake, two more wheel over the water, and puffins stand on the granite point (one with a beak full of capelin) while another flies in and out.\n- Every animation has its own card further down, under chr.* and ani.*.\n\nWhat the paint pass does:\n- Shores, paths and rock come from organic shapes instead of tile edges.\n- Cobble is drawn stone by stone, and granite is drawn as lit rock masses with south-facing cliff faces.\n- The grass has soft tonal zones and heath patches with partridgeberries.\n- Shadows are painted on: contact and cast shadows to the bottom-right.\n- Grass grows up around building bases and the turf creeps over the potato beds.\n- There are worn footpaths to the doors, stones heaped where the pier meets the beach, and animated foam along the painted shoreline for each sea state.\n- New props: lobster pots, a rope coil, a woodpile, a clothesline and more.\n\nSTART HERE: scroll through the groups. Use the variant buttons on each card (weathered/restored, sea states, recolours). Give feedback in chat by asset id.\n\nWhat to approve or redirect:\n1. Palette (top section). All ramps are draft. It's muted North Atlantic with warm accents: red ochre, oilskin orange, knit red.\n2. Player (chr.player): idle with a blink, walk in 4 directions, jigging. Red toque, navy hoodie, jeans, rubber boots. Variants: oilskins, green_toque.\n3. Buildings: saltbox house (weathered + restored red/white/ochre/blue), fishing stage (weathered + restored), wharf post and deck tiles.\n4. Shore and land: cobble beach and granite ledges (rocky, per your note), barrens grass with partridgeberries, dirt paths, foam per sea state, tuckamore clumps.\n5. Water: calm / breeze / swell, plus whitecap and spray effects.\n6. Work and items: punt (bobs per sea state; weathered variant), fish flake with salt cod, lazy-bed potatoes in 3 stages, icons (cod, jigger, potato, salt bucket), phone frame (one bar of signal) and app icons.\n\nOpen questions for you:\n- Scale: buildings were scaled to the 16\u00d732 player (doors about 24\u201326px). Does the house size feel right in the scene?\n- Weathered house: the peeling-paint patches may read as blobs; smaller, raggeder patches are an option.\n- The flake's cod are small (7\u00d77); bigger fish would read better but crowd the mat.\n- Palette additions the artists asked for: a brick/chimney ramp, a roof moss shade and a lighter roof highlight, pale purple (potato flowers), dried-spruce brown (flake boughs), a lighter blue-green spruce top, and a soft grey for outlining white plastic. Say which to add.\n\nNot done yet: portraits, interiors, more villagers, choppy/storm sea states, and checking the MCP tools from inside a fresh Claude Code session (they're tested by script).\n",
"palette": [
{
"ramp": "sea",
"status": "approved",
"colors": [
"#0d1b2a",
"#16304a",
"#1f4560",
"#2b5d78",
"#3f7a92",
"#6fa3b5"
],
"names": [
"sea-1",
"sea-2",
"sea-3",
"sea-4",
"sea-5",
"sea-6"
]
},
{
"ramp": "foam",
"status": "approved",
"colors": [
"#8fb4c0",
"#c9e0e3",
"#f2f7f4"
],
"names": [
"foam-1",
"foam-2",
"foam-3"
]
},
{
"ramp": "granite",
"status": "approved",
"colors": [
"#1c1d24",
"#363842",
"#53565f",
"#757a7e",
"#9c9e9b",
"#c4c2b8"
],
"names": [
"granite-1",
"granite-2",
"granite-3",
"granite-4",
"granite-5",
"granite-6"
]
},
{
"ramp": "cobble",
"status": "approved",
"colors": [
"#2b2420",
"#4f443b",
"#756858",
"#9d8f7b",
"#c3b7a2"
],
"names": [
"cobble-1",
"cobble-2",
"cobble-3",
"cobble-4",
"cobble-5"
]
},
{
"ramp": "kelp",
"status": "approved",
"colors": [
"#1a170c",
"#3a3216",
"#5e5124",
"#85733a"
],
"names": [
"kelp-1",
"kelp-2",
"kelp-3",
"kelp-4"
]
},
{
"ramp": "grass",
"status": "approved",
"colors": [
"#1a281b",
"#2c4127",
"#455d2e",
"#64793a",
"#8a9850",
"#b2b06b"
],
"names": [
"grass-1",
"grass-2",
"grass-3",
"grass-4",
"grass-5",
"grass-6"
]
},
{
"ramp": "barrens",
"status": "approved",
"colors": [
"#2b1f1c",
"#4d3329",
"#734f39",
"#98714e",
"#bd9869"
],
"names": [
"barrens-1",
"barrens-2",
"barrens-3",
"barrens-4",
"barrens-5"
]
},
{
"ramp": "dirt",
"status": "approved",
"colors": [
"#291c15",
"#493223",
"#6a4b33",
"#8b6947",
"#a98a63"
],
"names": [
"dirt-1",
"dirt-2",
"dirt-3",
"dirt-4",
"dirt-5"
]
},
{
"ramp": "spruce",
"status": "approved",
"colors": [
"#0c1714",
"#152b22",
"#21402d",
"#33573a",
"#4b6f45",
"#5f8a6a"
],
"names": [
"spruce-1",
"spruce-2",
"spruce-3",
"spruce-4",
"spruce-5",
"spruce-6"
]
},
{
"ramp": "wood-grey",
"status": "approved",
"colors": [
"#22201d",
"#403c36",
"#5f5950",
"#827b6f",
"#a59e8f",
"#c7c0ae"
],
"names": [
"wood-grey-1",
"wood-grey-2",
"wood-grey-3",
"wood-grey-4",
"wood-grey-5",
"wood-grey-6"
]
},
{
"ramp": "wood",
"status": "approved",
"colors": [
"#2b1d16",
"#4a3426",
"#6b5240",
"#8f7660",
"#b39d84"
],
"names": [
"wood-1",
"wood-2",
"wood-3",
"wood-4",
"wood-5"
]
},
{
"ramp": "roof",
"status": "approved",
"colors": [
"#131316",
"#25252a",
"#38383d",
"#504e52",
"#6a6665",
"#85807c"
],
"names": [
"roof-1",
"roof-2",
"roof-3",
"roof-4",
"roof-5",
"roof-6"
]
},
{
"ramp": "glass",
"status": "approved",
"colors": [
"#0f151b",
"#1e2d39",
"#395366",
"#6b8ea5",
"#b6cedb"
],
"names": [
"glass-1",
"glass-2",
"glass-3",
"glass-4",
"glass-5"
]
},
{
"ramp": "paint-red",
"status": "approved",
"colors": [
"#2d1012",
"#581c1d",
"#832a26",
"#a6412f",
"#c76446"
],
"names": [
"paint-red-1",
"paint-red-2",
"paint-red-3",
"paint-red-4",
"paint-red-5"
]
},
{
"ramp": "paint-ochre",
"status": "approved",
"colors": [
"#38250f",
"#694618",
"#986921",
"#c2902e",
"#e1b759"
],
"names": [
"paint-ochre-1",
"paint-ochre-2",
"paint-ochre-3",
"paint-ochre-4",
"paint-ochre-5"
]
},
{
"ramp": "paint-white",
"status": "approved",
"colors": [
"#2e3135",
"#6c7175",
"#a8acaa",
"#d5d5ce",
"#f0ede3"
],
"names": [
"paint-white-1",
"paint-white-2",
"paint-white-3",
"paint-white-4",
"paint-white-5"
]
},
{
"ramp": "paint-blue",
"status": "approved",
"colors": [
"#101a2c",
"#1f3554",
"#2f5280",
"#4874a8",
"#74a0cc"
],
"names": [
"paint-blue-1",
"paint-blue-2",
"paint-blue-3",
"paint-blue-4",
"paint-blue-5"
]
},
{
"ramp": "paint-green",
"status": "approved",
"colors": [
"#102119",
"#1e3a2a",
"#2e5a3d",
"#44795a",
"#6a9e7c"
],
"names": [
"paint-green-1",
"paint-green-2",
"paint-green-3",
"paint-green-4",
"paint-green-5"
]
},
{
"ramp": "skin",
"status": "approved",
"colors": [
"#3a221b",
"#6e3f2e",
"#a2654a",
"#cf9470",
"#ecc3a0"
],
"names": [
"skin-1",
"skin-2",
"skin-3",
"skin-4",
"skin-5"
]
},
{
"ramp": "skin-deep",
"status": "approved",
"colors": [
"#24150f",
"#4a2a1d",
"#74472f",
"#9c6847",
"#c3916b"
],
"names": [
"skin-deep-1",
"skin-deep-2",
"skin-deep-3",
"skin-deep-4",
"skin-deep-5"
]
},
{
"ramp": "hair-brown",
"status": "approved",
"colors": [
"#1c1210",
"#3a2419",
"#5d3c26",
"#835a38",
"#a87c52"
],
"names": [
"hair-brown-1",
"hair-brown-2",
"hair-brown-3",
"hair-brown-4",
"hair-brown-5"
]
},
{
"ramp": "hair-dark",
"status": "approved",
"colors": [
"#100e12",
"#232027",
"#39343d",
"#544d58"
],
"names": [
"hair-dark-1",
"hair-dark-2",
"hair-dark-3",
"hair-dark-4"
]
},
{
"ramp": "cloth-navy",
"status": "approved",
"colors": [
"#0f1420",
"#1c2638",
"#2b3a55",
"#405474",
"#5c7396"
],
"names": [
"cloth-navy-1",
"cloth-navy-2",
"cloth-navy-3",
"cloth-navy-4",
"cloth-navy-5"
]
},
{
"ramp": "denim",
"status": "approved",
"colors": [
"#131b29",
"#23334b",
"#385072",
"#547298",
"#7b96b6"
],
"names": [
"denim-1",
"denim-2",
"denim-3",
"denim-4",
"denim-5"
]
},
{
"ramp": "rubber",
"status": "approved",
"colors": [
"#0d0e10",
"#1e2023",
"#323539",
"#4b4f54"
],
"names": [
"rubber-1",
"rubber-2",
"rubber-3",
"rubber-4"
]
},
{
"ramp": "oilskin",
"status": "approved",
"colors": [
"#3a1c0a",
"#783910",
"#bd5e1a",
"#e5892a",
"#f4b64e"
],
"names": [
"oilskin-1",
"oilskin-2",
"oilskin-3",
"oilskin-4",
"oilskin-5"
]
},
{
"ramp": "knit-red",
"status": "approved",
"colors": [
"#2a0d10",
"#5c1a1f",
"#8f2a2c",
"#bd4339",
"#de6f55"
],
"names": [
"knit-red-1",
"knit-red-2",
"knit-red-3",
"knit-red-4",
"knit-red-5"
]
},
{
"ramp": "cod",
"status": "approved",
"colors": [
"#28231a",
"#52482f",
"#83744f",
"#b0a076",
"#d6cda8"
],
"names": [
"cod-1",
"cod-2",
"cod-3",
"cod-4",
"cod-5"
]
},
{
"ramp": "salt-fish",
"status": "approved",
"colors": [
"#4a4232",
"#8a7f62",
"#bcb090",
"#e2dac0",
"#f6f1e0"
],
"names": [
"salt-fish-1",
"salt-fish-2",
"salt-fish-3",
"salt-fish-4",
"salt-fish-5"
]
},
{
"ramp": "potato",
"status": "approved",
"colors": [
"#2d1e13",
"#583c23",
"#886137",
"#b28954",
"#d4b27b"
],
"names": [
"potato-1",
"potato-2",
"potato-3",
"potato-4",
"potato-5"
]
},
{
"ramp": "metal",
"status": "approved",
"colors": [
"#191b1f",
"#3a3f47",
"#69707a",
"#99a1aa",
"#d1d7db"
],
"names": [
"metal-1",
"metal-2",
"metal-3",
"metal-4",
"metal-5"
]
},
{
"ramp": "rope",
"status": "approved",
"colors": [
"#382c1d",
"#695838",
"#9a875f",
"#c6b68b"
],
"names": [
"rope-1",
"rope-2",
"rope-3",
"rope-4"
]
},
{
"ramp": "ui-dark",
"status": "approved",
"colors": [
"#0a0b0f",
"#191b23",
"#2b2e3a",
"#434757",
"#6a6f82"
],
"names": [
"ui-dark-1",
"ui-dark-2",
"ui-dark-3",
"ui-dark-4",
"ui-dark-5"
]
},
{
"ramp": "ui-screen",
"status": "approved",
"colors": [
"#14303b",
"#235366",
"#3a869c",
"#8bcbd4",
"#dff3f2"
],
"names": [
"ui-screen-1",
"ui-screen-2",
"ui-screen-3",
"ui-screen-4",
"ui-screen-5"
]
},
{
"ramp": "hair-grey",
"status": "draft",
"colors": [
"#2a2a2e",
"#55555b",
"#8a8a8e",
"#b9b8b5",
"#e2e0da"
],
"names": [
"hair-grey-1",
"hair-grey-2",
"hair-grey-3",
"hair-grey-4",
"hair-grey-5"
]
},
{
"ramp": "brick",
"status": "draft",
"colors": [
"#2a1512",
"#4f2620",
"#7a3a2c",
"#a1543c",
"#c27a5a"
],
"names": [
"brick-1",
"brick-2",
"brick-3",
"brick-4",
"brick-5"
]
},
{
"ramp": "moss",
"status": "draft",
"colors": [
"#1e2410",
"#3a4420",
"#5c6a32",
"#86924a"
],
"names": [
"moss-1",
"moss-2",
"moss-3",
"moss-4"
]
},
{
"ramp": "flower-purple",
"status": "draft",
"colors": [
"#3a2a40",
"#6a5078",
"#9c84ae",
"#cbb9d8"
],
"names": [
"flower-purple-1",
"flower-purple-2",
"flower-purple-3",
"flower-purple-4"
]
},
{
"ramp": "spruce-dry",
"status": "draft",
"colors": [
"#2a1c12",
"#4d3420",
"#77532f",
"#9c7744"
],
"names": [
"spruce-dry-1",
"spruce-dry-2",
"spruce-dry-3",
"spruce-dry-4"
]
},
{
"ramp": "plastic-grey",
"status": "draft",
"colors": [
"#4a5058",
"#7d848b",
"#b4b9bc"
],
"names": [
"plastic-grey-1",
"plastic-grey-2",
"plastic-grey-3"
]
},
{
"ramp": "hair-red",
"status": "draft",
"colors": [
"#2a120c",
"#5a2414",
"#8a3c1e",
"#b45a2a",
"#d6834a"
],
"names": [
"hair-red-1",
"hair-red-2",
"hair-red-3",
"hair-red-4",
"hair-red-5"
]
},
{
"ramp": "skin-dark",
"status": "draft",
"colors": [
"#170d0a",
"#301c14",
"#4c2e20",
"#6b452f",
"#8d6343"
],
"names": [
"skin-dark-1",
"skin-dark-2",
"skin-dark-3",
"skin-dark-4",
"skin-dark-5"
]
},
{
"ramp": "wallpaper",
"status": "draft",
"colors": [
"#3a2c16",
"#6e5a30",
"#a68c4e",
"#cfb86e",
"#e8d898"
],
"names": [
"wallpaper-1",
"wallpaper-2",
"wallpaper-3",
"wallpaper-4",
"wallpaper-5"
]
},
{
"ramp": "wallpaper-blue",
"status": "draft",
"colors": [
"#1f2734",
"#3e4e64",
"#687f98",
"#97acc0",
"#c4d3de"
],
"names": [
"wallpaper-blue-1",
"wallpaper-blue-2",
"wallpaper-blue-3",
"wallpaper-blue-4",
"wallpaper-blue-5"
]
},
{
"ramp": "floor",
"status": "draft",
"colors": [
"#2c1b0f",
"#57371b",
"#82592c",
"#a77a3f",
"#c89c5a",
"#e0bd7c"
],
"names": [
"floor-1",
"floor-2",
"floor-3",
"floor-4",
"floor-5",
"floor-6"
]
},
{
"ramp": "mackerel",
"status": "draft",
"colors": [
"#0c1a22",
"#173847",
"#22586a",
"#2f7b88",
"#4fa0a6"
],
"names": [
"mackerel-1",
"mackerel-2",
"mackerel-3",
"mackerel-4",
"mackerel-5"
]
},
{
"ramp": "pollock",
"status": "draft",
"colors": [
"#151b16",
"#2a362b",
"#435441",
"#62755c",
"#8a9b80"
],
"names": [
"pollock-1",
"pollock-2",
"pollock-3",
"pollock-4",
"pollock-5"
]
},
{
"ramp": "shoal",
"status": "draft",
"colors": [
"#1f4d5e",
"#2d6676",
"#3b7b84",
"#5d9a9a"
],
"names": [
"shoal-1",
"shoal-2",
"shoal-3",
"shoal-4"
]
}
],
"palette_version": 12,
"scenes": [],
"maps": [
{
"title": "The bay north of Twinkle Cove (painted, M1) \u2014 sea state: calm",
"w": 1280,
"h": 720,
"views": {
"all": [
{
"src": "img/map_bay_north_calm_all.webp",
"ms": 200
}
]
}
},
{
"title": "The bay north of Twinkle Cove (painted, M1) \u2014 sea state: swell",
"w": 1280,
"h": 720,
"views": {
"all": [
{
"src": "img/map_bay_north_swell_all.webp",
"ms": 200
}
]
}
},
{
"title": "Twinkle Cove harbour (painted, M1) \u2014 sea state: calm",
"w": 960,
"h": 544,
"views": {
"all": [
{
"src": "img/map_harbour_calm_all.webp",
"ms": 120
}
]
}
},
{
"title": "Family house, main floor (painted interior) \u2014 sea state: calm",
"w": 320,
"h": 256,
"views": {
"all": [
{
"src": "img/map_house_main_calm_all_0.png",
"ms": 200
}
]
}
},
{
"title": "Family house, upstairs (painted interior) \u2014 sea state: calm",
"w": 320,
"h": 256,
"views": {
"all": [
{
"src": "img/map_house_upstairs_calm_all_0.png",
"ms": 200
}
]
}
}
],
"groups": [
{
"name": "terrain.cobble",
"assets": [
{
"id": "terrain.cobble.m0",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/cobble.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 0,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "terrain.cobble.m17",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/cobble.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 17,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.cobble.m255",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/cobble.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:50",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
}
]
},
{
"id": "terrain.cobble.m68",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/cobble.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 34,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.cobble.m85",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/cobble.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 51,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
}
]
},
{
"name": "terrain.dirt",
"assets": [
{
"id": "terrain.dirt.m0",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"dirt"
],
"source": "art/terrain/dirt.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 68,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "terrain.dirt.m17",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"dirt"
],
"source": "art/terrain/dirt.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 85,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.dirt.m255",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"dirt"
],
"source": "art/terrain/dirt.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:51",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 1323
}
]
},
{
"id": "terrain.dirt.m255.v1",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"dirt"
],
"source": "art/terrain/dirt.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.dirt.m255.v2",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"dirt"
],
"source": "art/terrain/dirt.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.dirt.m68",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"dirt"
],
"source": "art/terrain/dirt.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.dirt.m85",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"dirt"
],
"source": "art/terrain/dirt.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 170,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
}
]
},
{
"name": "terrain.granite",
"assets": [
{
"id": "terrain.granite.m0",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 187,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:43:41",
"note": "before critic",
"w": 16,
"h": 16,
"sheet": 0,
"x": 204,
"y": 1323
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"granite.yaml has no fill_variants and _granite_tex places its dark granite-5 flecks on a near-regular diagonal, so every interior cell is the same stamp. Across the harbour scene's large ledges this shows as a 16 px wallpaper lattice: it reads as patterned paving, not bedrock"
],
"before_version": 1
}
},
{
"id": "terrain.granite.m17",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 221,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.granite.m255",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:51",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 238,
"y": 1323
}
]
},
{
"id": "terrain.granite.m255.v1",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 255,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "terrain.granite.m255.v2",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 272,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "terrain.granite.m255.v3",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 289,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "terrain.granite.m68",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 306,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.granite.m85",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/granite.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 323,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
}
]
},
{
"name": "terrain.grass",
"assets": [
{
"id": "terrain.grass.m0",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 340,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "terrain.grass.m17",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 357,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.grass.m255",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 374,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:50",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 374,
"y": 1323
}
]
},
{
"id": "terrain.grass.m255.v1",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.grass.m255.v2",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 408,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.grass.m255.v3",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 425,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.grass.m68",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 442,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "terrain.grass.m85",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"grass"
],
"source": "art/terrain/grass.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 459,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
}
]
},
{
"name": "water.open",
"assets": [
{
"id": "water.open.p0",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"water"
],
"source": "art/terrain/water.yaml",
"generator": "water_set",
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 561,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 578,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 595,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 612,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 629,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 646,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 663,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 680,
"y": 1323
}
],
"calm": [
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 561,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 578,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 595,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 612,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 629,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 646,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 663,
"y": 1323
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 680,
"y": 1323
}
],
"breeze": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 697,
"y": 1323
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 714,
"y": 1323
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 731,
"y": 1323
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 748,
"y": 1323
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 765,
"y": 1323
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 782,
"y": 1323
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 799,
"y": 1323
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 816,
"y": 1323
}
],
"swell": [
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 833,
"y": 1323
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 850,
"y": 1323
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 867,
"y": 1323
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 884,
"y": 1323
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 901,
"y": 1323
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 918,
"y": 1323
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 935,
"y": 1323
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 952,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "edge.cobble_water",
"assets": [
{
"id": "edge.cobble_water.m0",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/shore.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 85,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 85,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 1306
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 170,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 187,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 204,
"y": 1306
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 221,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 238,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 255,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 272,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "edge.cobble_water.m17",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/shore.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 289,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 306,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 323,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 340,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 289,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 306,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 323,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 340,
"y": 1306
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 357,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 374,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 408,
"y": 1306
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 425,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 442,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 459,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 476,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "edge.cobble_water.m255",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/shore.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "edge.cobble_water.m68",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/shore.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 510,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 527,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 544,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 561,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 510,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 527,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 544,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 561,
"y": 1306
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 578,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 595,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 612,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 629,
"y": 1306
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 646,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 663,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 680,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 697,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "edge.cobble_water.m85",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"cobble"
],
"source": "art/terrain/shore.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 714,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 731,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 748,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 765,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 714,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 731,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 748,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 765,
"y": 1306
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 782,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 799,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 816,
"y": 1306
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 833,
"y": 1306
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 850,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 867,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 884,
"y": 1306
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 901,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
}
]
},
{
"name": "edge.granite_water",
"assets": [
{
"id": "edge.granite_water.m0",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 918,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 935,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 952,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 969,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 918,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 935,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 952,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 969,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 986,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1003,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1020,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1037,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1054,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1071,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1088,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1037,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:43:42",
"note": "before critic",
"w": 16,
"h": 16,
"sheet": 0,
"x": 1105,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"same root cause as terrain.granite: ledge.yaml uses _granite_tex with no fill_variants, so every interior cell is the identical 16x16 stamp and the ledges in the harbour scene show a regular diagonal lattice of dark flecks (wallpaper, not bedrock)"
],
"before_version": 1
}
},
{
"id": "edge.granite_water.m17",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1122,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1139,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1156,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1173,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1122,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1139,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1156,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1173,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1190,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1224,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1241,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1258,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1275,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1292,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1309,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "edge.granite_water.m255",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "edge.granite_water.m255.v1",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "edge.granite_water.m255.v2",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "edge.granite_water.m255.v3",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "edge.granite_water.m68",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1394,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1411,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1428,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1445,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1394,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1411,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1428,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1445,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1462,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1479,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1496,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1513,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1530,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1547,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1564,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1581,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "edge.granite_water.m85",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"autotile",
"granite"
],
"source": "art/terrain/ledge.yaml",
"generator": "autotile47",
"variants": {
"(base)": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1598,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1615,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1632,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1649,
"y": 1306
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1598,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1615,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1632,
"y": 1306
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1649,
"y": 1306
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1666,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1683,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1700,
"y": 1306
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1717,
"y": 1306
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1734,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1751,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1768,
"y": 1306
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1785,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
}
]
},
{
"name": "fx",
"assets": [
{
"id": "fx.handline.pull",
"kind": "fx",
"w": 11,
"h": 14,
"tags": [
"fx",
"fishing",
"handline",
"water"
],
"source": "art/fx/handline/pull.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 150,
"w": 11,
"h": 14,
"sheet": 0,
"x": 717,
"y": 1340
},
{
"ms": 150,
"w": 11,
"h": 14,
"sheet": 0,
"x": 729,
"y": 1340
},
{
"ms": 150,
"w": 11,
"h": 14,
"sheet": 0,
"x": 741,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.handline.slack",
"kind": "fx",
"w": 11,
"h": 14,
"tags": [
"fx",
"fishing",
"handline",
"water"
],
"source": "art/fx/handline/slack.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 450,
"w": 11,
"h": 14,
"sheet": 0,
"x": 753,
"y": 1340
},
{
"ms": 450,
"w": 11,
"h": 14,
"sheet": 0,
"x": 765,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.handline.taut",
"kind": "fx",
"w": 11,
"h": 14,
"tags": [
"fx",
"fishing",
"handline",
"water"
],
"source": "art/fx/handline/taut.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 11,
"h": 14,
"sheet": 0,
"x": 777,
"y": 1340
},
{
"ms": 300,
"w": 11,
"h": 14,
"sheet": 0,
"x": 789,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.handline.twitch",
"kind": "fx",
"w": 11,
"h": 14,
"tags": [
"fx",
"fishing",
"handline",
"water"
],
"source": "art/fx/handline/twitch.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 90,
"w": 11,
"h": 14,
"sheet": 0,
"x": 801,
"y": 1340
},
{
"ms": 70,
"w": 11,
"h": 14,
"sheet": 0,
"x": 813,
"y": 1340
},
{
"ms": 140,
"w": 11,
"h": 14,
"sheet": 0,
"x": 825,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.sign.capelin",
"kind": "fx",
"w": 26,
"h": 12,
"tags": [
"water",
"fx",
"sign"
],
"source": "art/fx/signs/capelin.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1068,
"y": 1340
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1095,
"y": 1340
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1122,
"y": 1340
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1149,
"y": 1340
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1176,
"y": 1340
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1203,
"y": 1340
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1230,
"y": 1340
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1257,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:39:23",
"note": "before critic",
"w": 26,
"h": 12,
"sheet": 0,
"x": 1284,
"y": 1340
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"Not readable at 1x on bay_north's open water. The flecks are 1-2 px of foam-1/foam-3 and the rings are sea-5, which is close to the water's own sea-5/6 marks. On swell (9 marks per tile, plus 0.2 whitecaps) the patch disappears into the water texture, and on breeze it's marginal. Only calm reads, and even there it's faint.",
"Frame 3 has only 6 opaque px (others have 17-35), so the sign blinks almost out mid-loop and the patch pops."
],
"before_version": 1
}
},
{
"id": "fx.sign.gulls_diving",
"kind": "fx",
"w": 48,
"h": 40,
"tags": [
"water",
"fx",
"sign",
"gull"
],
"source": "art/fx/signs/gulls_diving.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 177,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 226,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 275,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 324,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 373,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 422,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 471,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 520,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 569,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 618,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 667,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 716,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 765,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 814,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 863,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 912,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 961,
"y": 838
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1010,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.sign.gulls_rafting",
"kind": "fx",
"w": 40,
"h": 16,
"tags": [
"water",
"fx",
"sign",
"gull"
],
"source": "art/fx/signs/gulls_rafting.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 891,
"y": 1287
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 932,
"y": 1287
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 973,
"y": 1287
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1014,
"y": 1287
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1055,
"y": 1287
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1096,
"y": 1287
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1137,
"y": 1287
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1178,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.sign.whale_blow",
"kind": "fx",
"w": 84,
"h": 36,
"tags": [
"water",
"fx",
"sign",
"whale"
],
"source": "art/fx/signs/whale_blow.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 4200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1381,
"y": 838
},
{
"ms": 160,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1466,
"y": 838
},
{
"ms": 110,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1551,
"y": 838
},
{
"ms": 110,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1636,
"y": 838
},
{
"ms": 140,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1721,
"y": 838
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1806,
"y": 838
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1891,
"y": 838
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 0,
"y": 884
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 85,
"y": 884
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 170,
"y": 884
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 255,
"y": 884
},
{
"ms": 380,
"w": 84,
"h": 36,
"sheet": 0,
"x": 340,
"y": 884
},
{
"ms": 240,
"w": 84,
"h": 36,
"sheet": 0,
"x": 425,
"y": 884
},
{
"ms": 450,
"w": 84,
"h": 36,
"sheet": 0,
"x": 510,
"y": 884
},
{
"ms": 500,
"w": 84,
"h": 36,
"sheet": 0,
"x": 595,
"y": 884
},
{
"ms": 400,
"w": 84,
"h": 36,
"sheet": 0,
"x": 680,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.spray",
"kind": "fx",
"w": 8,
"h": 8,
"tags": [
"water",
"fx"
],
"source": "art/fx/spray.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 90,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1482,
"y": 1340
},
{
"ms": 90,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1491,
"y": 1340
},
{
"ms": 110,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1500,
"y": 1340
},
{
"ms": 140,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1509,
"y": 1340
},
{
"ms": 1400,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1518,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:48",
"note": "v1 proof asset, overnight build",
"w": 8,
"h": 8,
"sheet": 0,
"x": 1482,
"y": 1340
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.wake.down",
"kind": "fx",
"w": 27,
"h": 22,
"tags": [
"fx",
"water",
"boat"
],
"source": "art/fx/wake/down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 1602,
"y": 1216
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 1630,
"y": 1216
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 1658,
"y": 1216
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 1686,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.wake.right",
"kind": "fx",
"w": 22,
"h": 13,
"tags": [
"fx",
"water",
"boat"
],
"source": "art/fx/wake/right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 961,
"y": 1340
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 984,
"y": 1340
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 1007,
"y": 1340
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 1030,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.wake.up",
"kind": "fx",
"w": 17,
"h": 22,
"tags": [
"fx",
"water",
"boat"
],
"source": "art/fx/wake/up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 1714,
"y": 1216
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 1732,
"y": 1216
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 1750,
"y": 1216
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 1768,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fx.whitecap",
"kind": "fx",
"w": 7,
"h": 4,
"tags": [
"water",
"fx"
],
"source": "art/fx/whitecap.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 160,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1626,
"y": 1340
},
{
"ms": 140,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1634,
"y": 1340
},
{
"ms": 220,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1642,
"y": 1340
},
{
"ms": 200,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1650,
"y": 1340
},
{
"ms": 260,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1658,
"y": 1340
},
{
"ms": 900,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1666,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:47",
"note": "v1 proof asset, overnight build",
"w": 7,
"h": 4,
"sheet": 0,
"x": 1626,
"y": 1340
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "obj",
"assets": [
{
"id": "obj.buoys",
"kind": "object",
"w": 10,
"h": 10,
"tags": [
"prop",
"harbour",
"fishery"
],
"source": "art/objects/props/buoys.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 10,
"h": 10,
"sheet": 0,
"x": 1411,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT006: the rim that is close to grass-3 is the 1 px rope arc, a deliberate light edge (outline_colors: rope-2/3); the orange, red and white floats with their dark outlines stand clear of the grass at 1x"
]
}
},
{
"id": "obj.clothesline",
"kind": "object",
"w": 56,
"h": 30,
"tags": [
"prop",
"house",
"laundry"
],
"source": "art/objects/props/clothesline.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 700,
"w": 56,
"h": 30,
"sheet": 0,
"x": 1934,
"y": 1152
},
{
"ms": 260,
"w": 56,
"h": 30,
"sheet": 0,
"x": 1991,
"y": 1152
},
{
"ms": 420,
"w": 56,
"h": 30,
"sheet": 0,
"x": 0,
"y": 1185
},
{
"ms": 260,
"w": 56,
"h": 30,
"sheet": 0,
"x": 1991,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.fence_longer_h",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"prop",
"fence",
"garden",
"tiling"
],
"source": "art/objects/props/fence_longer_h.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 2006,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: both pixels are metal-2 nail heads in the longers: deliberate 1 px details"
]
}
},
{
"id": "obj.fence_longer_v",
"kind": "object",
"w": 8,
"h": 16,
"tags": [
"prop",
"fence",
"garden",
"tiling"
],
"source": "art/objects/props/fence_longer_v.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 8,
"h": 16,
"sheet": 0,
"x": 996,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.fish_tub",
"kind": "object",
"w": 16,
"h": 10,
"tags": [
"prop",
"harbour",
"fishery",
"modern"
],
"source": "art/objects/props/fish_tub.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 10,
"sheet": 0,
"x": 1349,
"y": 1340
}
],
"full": [
{
"ms": 0,
"w": 16,
"h": 10,
"sheet": 0,
"x": 1366,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.flake",
"kind": "object",
"w": 64,
"h": 25,
"tags": [
"harbour",
"fishery"
],
"source": "art/objects/harbour/flake.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 64,
"h": 25,
"sheet": 0,
"x": 1146,
"y": 1216
}
],
"empty": [
{
"ms": 0,
"w": 64,
"h": 25,
"sheet": 0,
"x": 1211,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:41",
"note": "v1 proof asset, overnight build",
"w": 64,
"h": 25,
"sheet": 0,
"x": 1146,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: flecks of spruce-green needles and brown twigs in the bough mat: deliberate texture",
"CRT004: the front edge of the platform: lit plank edge, fascia, then outline. It's a deliberate edge, not banding",
"CRT006: the mid-grey back/side edge is deliberate (meta outline_colors) so the sunlit mat isn't framed; in context on the beach dirt the flake reads clearly at 1x and the fish make it pop"
]
}
},
{
"id": "obj.house.armchair",
"kind": "object",
"w": 17,
"h": 21,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/armchair.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 17,
"h": 21,
"sheet": 0,
"x": 1901,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:16",
"note": "before critic",
"w": 17,
"h": 21,
"sheet": 0,
"x": 1919,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"before_version": 1
}
},
{
"id": "obj.house.basin",
"kind": "object",
"w": 14,
"h": 17,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/basin.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 14,
"h": 17,
"sheet": 0,
"x": 796,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T22:58:20",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 14,
"h": 17,
"sheet": 0,
"x": 811,
"y": 1287
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-29",
"before_version": 1,
"fixed": [
"tap, drain, pedestal and foot centred on the 14 px bowl (even widths)",
"top-left light instead of pillow shading; the pedestal reads as a column"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.bed_1",
"kind": "object",
"w": 20,
"h": 59,
"tags": [
"interior",
"house",
"bed"
],
"source": "art/objects/interior/house/bed_1.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 59,
"sheet": 0,
"x": 1653,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:06",
"note": "before critic",
"w": 20,
"h": 59,
"sheet": 0,
"x": 1674,
"y": 722
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"head- and footboard have their light wood-4 column on the RIGHT (x18) and the plain panel colour on the left (x1): the frame is lit from the right, against the top-left light and against the rest of the furniture (dresser, armchair, coat tree are lit on the left)",
"the quilt's right edge alternates the quilt's colour-1 outline with paint-white-1 grey wherever a white check meets the edge, while the left edge is colour-1 throughout; it shows as a broken grey/dark dotted edge on one side only"
],
"before_version": 1,
"overruled": [
"CRT001: the quilt's 3-px check pattern, whose phase can't mirror over 16-18 px; outline, frame shapes and colour families match left to right (both quilt edges now colour-1, x1 and x18, rows 26-41)"
]
}
},
{
"id": "obj.house.bed_2",
"kind": "object",
"w": 20,
"h": 59,
"tags": [
"interior",
"house",
"bed"
],
"source": "art/objects/interior/house/bed_2.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 59,
"sheet": 0,
"x": 1695,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:08",
"note": "before critic",
"w": 20,
"h": 59,
"sheet": 0,
"x": 1716,
"y": 722
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"head- and footboard have their light wood-4 column on the RIGHT (x18) and the plain panel colour on the left (x1): the frame is lit from the right, against the top-left light and against the rest of the furniture (dresser, armchair, coat tree are lit on the left)",
"the quilt's right edge alternates the quilt's colour-1 outline with paint-white-1 grey wherever a white check meets the edge, while the left edge is colour-1 throughout; it shows as a broken grey/dark dotted edge on one side only"
],
"before_version": 1,
"overruled": [
"CRT001: the quilt's 3-px check pattern, whose phase can't mirror over 16-18 px; outline, frame shapes and colour families match left to right (both quilt edges now colour-1, x1 and x18, rows 26-41)"
]
}
},
{
"id": "obj.house.bed_3",
"kind": "object",
"w": 20,
"h": 59,
"tags": [
"interior",
"house",
"bed"
],
"source": "art/objects/interior/house/bed_3.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 59,
"sheet": 0,
"x": 1737,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:09",
"note": "before critic",
"w": 20,
"h": 59,
"sheet": 0,
"x": 1758,
"y": 722
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"head- and footboard have their light wood-4 column on the RIGHT (x18) and the plain panel colour on the left (x1): the frame is lit from the right, against the top-left light and against the rest of the furniture (dresser, armchair, coat tree are lit on the left)",
"the quilt's right edge alternates the quilt's colour-1 outline with paint-white-1 grey wherever a white check meets the edge, while the left edge is colour-1 throughout; it shows as a broken grey/dark dotted edge on one side only"
],
"before_version": 1,
"overruled": [
"CRT001: the quilt's 3-px check pattern, whose phase can't mirror over 16-18 px; outline, frame shapes and colour families match left to right (both quilt edges now colour-1, x1 and x18, rows 26-41)"
]
}
},
{
"id": "obj.house.bed_4",
"kind": "object",
"w": 20,
"h": 59,
"tags": [
"interior",
"house",
"bed"
],
"source": "art/objects/interior/house/bed_4.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 59,
"sheet": 0,
"x": 1779,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:10",
"note": "before critic",
"w": 20,
"h": 59,
"sheet": 0,
"x": 1800,
"y": 722
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"head- and footboard have their light wood-4 column on the RIGHT (x18) and the plain panel colour on the left (x1): the frame is lit from the right, against the top-left light and against the rest of the furniture (dresser, armchair, coat tree are lit on the left)",
"the quilt's right edge alternates the quilt's colour-1 outline with paint-white-1 grey wherever a white check meets the edge, while the left edge is colour-1 throughout; it shows as a broken grey/dark dotted edge on one side only"
],
"before_version": 1,
"overruled": [
"CRT001: the quilt's 3-px check pattern, whose phase can't mirror over 16-18 px; outline, frame shapes and colour families match left to right (both quilt edges now colour-1, x1 and x18, rows 26-41)"
]
}
},
{
"id": "obj.house.bench",
"kind": "object",
"w": 13,
"h": 42,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/bench.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 13,
"h": 42,
"sheet": 0,
"x": 163,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.bookcase",
"kind": "object",
"w": 32,
"h": 45,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/bookcase.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 32,
"h": 45,
"sheet": 0,
"x": 0,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT006: in context it stands against the pale blue wall with a wood-1 outline and reads instantly at 1x against both wall and floor"
]
}
},
{
"id": "obj.house.books",
"kind": "object",
"w": 7,
"h": 6,
"tags": [
"interior",
"house",
"prop"
],
"source": "art/objects/interior/house/books.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 7,
"h": 6,
"sheet": 0,
"x": 1551,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-29",
"fixed": [
"new part: each book outlined in its own colour"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.boot_tray",
"kind": "object",
"w": 22,
"h": 10,
"tags": [
"interior",
"house",
"prop"
],
"source": "art/objects/interior/house/boot_tray.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 22,
"h": 10,
"sheet": 0,
"x": 1326,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"fixed": [
"boots shortened (they read as waders) and given toes",
"black rubber tray with a lip, for contrast"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.chair_e",
"kind": "object",
"w": 11,
"h": 31,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chair_e.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 11,
"h": 31,
"sheet": 0,
"x": 1805,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.chair_n",
"kind": "object",
"w": 12,
"h": 22,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chair_n.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 22,
"sheet": 0,
"x": 1888,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T22:58:21",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 12,
"h": 25,
"sheet": 0,
"x": 1293,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-29",
"before_version": 1,
"fixed": [
"spindles evenly spaced and mirrored (2-2-2 gaps)",
"has a seat; legs have a lit core like chair_s"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.chair_s",
"kind": "object",
"w": 12,
"h": 21,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chair_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 21,
"sheet": 0,
"x": 1967,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T22:58:22",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 12,
"h": 21,
"sheet": 0,
"x": 1980,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-29",
"before_version": 1,
"fixed": [
"spindles evenly spaced and mirrored, matching chair_n"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.chair_w",
"kind": "object",
"w": 11,
"h": 31,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chair_w.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 11,
"h": 31,
"sheet": 0,
"x": 1817,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.chest",
"kind": "object",
"w": 20,
"h": 16,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chest.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 16,
"sheet": 0,
"x": 1325,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:11",
"note": "before critic",
"w": 20,
"h": 16,
"sheet": 0,
"x": 1346,
"y": 1287
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the chest is one flat blue fill (shade 3) with a single darker band at the lid seam: no lit lid top, no lit left edge, no shadowed right side. At 1x it reads as a flat coloured square with straps, flatter than every neighbour (dresser, toy chest, desk)"
],
"before_version": 1
}
},
{
"id": "obj.house.chest_mom",
"kind": "object",
"w": 20,
"h": 16,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chest_mom.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 16,
"sheet": 0,
"x": 1367,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:13",
"note": "before critic",
"w": 20,
"h": 16,
"sheet": 0,
"x": 1388,
"y": 1287
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the chest is one flat green fill (shade 3) with a single darker band at the lid seam: no lit lid top, no lit left edge, no shadowed right side. At 1x it reads as a flat coloured square with straps, flatter than every neighbour (dresser, toy chest, desk)"
],
"before_version": 1
}
},
{
"id": "obj.house.chest_up",
"kind": "object",
"w": 20,
"h": 16,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chest_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 16,
"sheet": 0,
"x": 1409,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:14",
"note": "before critic",
"w": 20,
"h": 16,
"sheet": 0,
"x": 1430,
"y": 1287
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the chest is one flat red fill (shade 3) with a single darker band at the lid seam: no lit lid top, no lit left edge, no shadowed right side. At 1x it reads as a flat coloured square with straps, flatter than every neighbour (dresser, toy chest, desk)"
],
"before_version": 1
}
},
{
"id": "obj.house.chesterfield",
"kind": "object",
"w": 62,
"h": 29,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chesterfield.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 62,
"h": 29,
"sheet": 0,
"x": 1729,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT006: it sits on the braided rug, not bare floor, and the dark outline separates it clearly at 1x",
"CRT007: the afghan has its own near-black border on top and sides and a fringe at the bottom, and rises above the couch's back line, so it already sits in front of the parent's outline"
]
}
},
{
"id": "obj.house.coat_tree",
"kind": "object",
"w": 16,
"h": 31,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/coat_tree.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 31,
"sheet": 0,
"x": 1788,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: the navy jacket's button, matching the oilskin's button at 2,12: deliberate",
"CRT003: 1-px gap between the oilskin collar and the pole where it hangs from its hook; reads as negative space",
"CRT003: the same hook gap on the jacket side",
"CRT007: the jacket's navy-2 edge sits beside the lit wood pole, which runs in front of both coats; value separates them clearly, and a separate part would add nothing visible"
]
}
},
{
"id": "obj.house.coffee_table",
"kind": "object",
"w": 30,
"h": 16,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/coffee_table.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 30,
"h": 16,
"sheet": 0,
"x": 1219,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"fixed": [
"placed between the TV and the chesterfield (it was behind the couch)",
"3 px of floor between it and the TV stand"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.counter",
"kind": "object",
"w": 73,
"h": 32,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/counter.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 73,
"h": 32,
"sheet": 0,
"x": 1148,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: coffee maker's green power light",
"CRT003: red hot-tap handle",
"CRT003: blue cold-tap handle",
"CRT003: red label on the blue tin",
"CRT003: drawer pull, repeated on every drawer",
"CRT004: bevelled inset panel of the cupboard doors, repeated on every door: deliberate"
]
}
},
{
"id": "obj.house.daybed",
"kind": "object",
"w": 21,
"h": 67,
"tags": [
"interior",
"house",
"bed"
],
"source": "art/objects/interior/house/daybed.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 21,
"h": 67,
"sheet": 0,
"x": 1453,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.desk",
"kind": "object",
"w": 36,
"h": 28,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/desk.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 36,
"h": 28,
"sheet": 0,
"x": 491,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T22:58:18",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 36,
"h": 27,
"sheet": 0,
"x": 553,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-29",
"before_version": 1,
"fixed": [
"the laptop, books and mug are separate parts with their own outlines; the desk's outline runs behind them",
"the laptop is redrawn at its own proportions (lid 8 px, base 5 px), facing the viewer"
],
"overruled": [
"CRT003 drawer knob: a deliberate 1 px detail"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.dresser",
"kind": "object",
"w": 34,
"h": 29,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/dresser.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 34,
"h": 29,
"sheet": 0,
"x": 1792,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: green continents on the little globe: deliberate",
"CRT006: in context the wood-1 outline separates it from both the wainscot and the floor; it reads clearly at 1x"
]
}
},
{
"id": "obj.house.dresser_mom",
"kind": "object",
"w": 34,
"h": 30,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/dresser_mom.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 34,
"h": 30,
"sheet": 0,
"x": 102,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:38:15",
"note": "before critic",
"w": 34,
"h": 30,
"sheet": 0,
"x": 137,
"y": 1185
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the jewellery box is a flat knit-red block with no outline of its own, and its top edge butts straight against the dresser's back outline, so the dresser outline runs around it (the laptop-on-desk mistake). The wedding photo and hairbrush are fine"
],
"before_version": 1
}
},
{
"id": "obj.house.dryer",
"kind": "object",
"w": 20,
"h": 26,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/dryer.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 26,
"sheet": 0,
"x": 953,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "panel",
"date": "2026-10-30",
"fixed": [
"new: front-load dryer matching the washer"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.footstool",
"kind": "object",
"w": 12,
"h": 10,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/footstool.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 10,
"sheet": 0,
"x": 1398,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "panel",
"date": "2026-10-30",
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.freezer",
"kind": "object",
"w": 44,
"h": 30,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/freezer.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 44,
"h": 30,
"sheet": 0,
"x": 57,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: the green power light: deliberate"
]
}
},
{
"id": "obj.house.fridge",
"kind": "object",
"w": 26,
"h": 47,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/fridge.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 26,
"h": 47,
"sheet": 0,
"x": 1942,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: red detail in the child's drawing on the door",
"CRT003: the face in the framed photo magnet"
]
}
},
{
"id": "obj.house.hamper",
"kind": "object",
"w": 12,
"h": 16,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/hamper.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 16,
"sheet": 0,
"x": 983,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-30",
"fixed": [
"right column shaded for top-left light"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.hutch",
"kind": "object",
"w": 34,
"h": 45,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/hutch.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 34,
"h": 45,
"sheet": 0,
"x": 1969,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:34",
"note": "before critic",
"w": 34,
"h": 45,
"sheet": 0,
"x": 2004,
"y": 722
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"before_version": 1,
"overruled": [
"CRT003: the two door knobs (15,38 and 19,38): deliberate 1 px details, symmetric about the centre stile",
"CRT004: the bottom bevels of the two matching raised door panels: parallel by design, and they read as panelling at 1x, not banding"
]
}
},
{
"id": "obj.house.laptop",
"kind": "object",
"w": 14,
"h": 13,
"tags": [
"interior",
"house",
"prop"
],
"source": "art/objects/interior/house/laptop.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 14,
"h": 13,
"sheet": 0,
"x": 1053,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-29",
"fixed": [
"new part: screen in a bezel facing the viewer, keyboard rows, own outline, lid lit against the desk"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.linen_cupboard",
"kind": "object",
"w": 22,
"h": 40,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/linen_cupboard.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 22,
"h": 40,
"sheet": 0,
"x": 1059,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "panel",
"date": "2026-10-30",
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.mom_bed",
"kind": "object",
"w": 32,
"h": 59,
"tags": [
"interior",
"house",
"bed"
],
"source": "art/objects/interior/house/mom_bed.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 32,
"h": 59,
"sheet": 0,
"x": 1620,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT001: the differences are only the quilt's checker phase (mirror.png shows the pink only inside the quilt). The frame, headboard spindles, pillows and footboard match left to right, so lesson 1 holds"
]
}
},
{
"id": "obj.house.mug",
"kind": "object",
"w": 6,
"h": 5,
"tags": [
"interior",
"house",
"prop"
],
"source": "art/objects/interior/house/mug.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 6,
"h": 5,
"sheet": 0,
"x": 1619,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-29",
"fixed": [
"new part with its own outline"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.nightstand_1",
"kind": "object",
"w": 12,
"h": 26,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/nightstand_1.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 26,
"sheet": 0,
"x": 974,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:27",
"note": "before critic",
"w": 12,
"h": 26,
"sheet": 0,
"x": 987,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the lamp floats: its base (row 5) ends 3 empty rows above the cabinet's top outline (row 9), so in context the lamp hangs on the wainscot above the nightstand instead of standing on it"
],
"before_version": 1
}
},
{
"id": "obj.house.nightstand_2",
"kind": "object",
"w": 12,
"h": 26,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/nightstand_2.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 26,
"sheet": 0,
"x": 1000,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:28",
"note": "before critic",
"w": 12,
"h": 26,
"sheet": 0,
"x": 1013,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"same as nightstand_1: the lamp's base (row 5) floats 3 px above the cabinet top (row 9)"
],
"before_version": 1
}
},
{
"id": "obj.house.nightstand_mom",
"kind": "object",
"w": 12,
"h": 26,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/nightstand_mom.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 26,
"sheet": 0,
"x": 1026,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:29",
"note": "before critic",
"w": 12,
"h": 26,
"sheet": 0,
"x": 1039,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"same as nightstand_1: the lamp floats 3 px above the cabinet top, which is very visible beside mom's bed"
],
"before_version": 1
}
},
{
"id": "obj.house.plant",
"kind": "object",
"w": 12,
"h": 26,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/plant.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 26,
"sheet": 0,
"x": 1052,
"y": 1216
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.radio_table",
"kind": "object",
"w": 14,
"h": 33,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/radio_table.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 14,
"h": 33,
"sheet": 0,
"x": 1118,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:31",
"note": "before critic",
"w": 14,
"h": 33,
"sheet": 0,
"x": 1133,
"y": 884
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the radio floats: its bottom outline (row 10) has 2 empty rows (11-12) under it before the table's top outline (row 13), so the wall shows through between the radio and the table"
],
"before_version": 1,
"overruled": [
"CRT003: the radio's red dial pointer in the yellow control strip (the round-1 overrule at 7,7, moved down 5 px with the radio): a deliberate 1 px detail"
]
}
},
{
"id": "obj.house.rocker",
"kind": "object",
"w": 16,
"h": 25,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/rocker.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 25,
"sheet": 0,
"x": 1276,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.sewing_machine",
"kind": "object",
"w": 26,
"h": 26,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/sewing_machine.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 26,
"h": 26,
"sheet": 0,
"x": 590,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "panel",
"date": "2026-10-30",
"fixed": [
"needle bar ends above the bed plate, with a needle"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.stair_rail",
"kind": "object",
"w": 41,
"h": 113,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/stair_rail.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 41,
"h": 113,
"sheet": 0,
"x": 304,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.stairs",
"kind": "object",
"w": 41,
"h": 150,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/stairs.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 41,
"h": 150,
"sheet": 0,
"x": 883,
"y": 361
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT004: the right stringer's edge running the length of the flight: parallel 1 px columns give a rounded beam edge and read as the stringer at 1x, not as banding across a form"
]
}
},
{
"id": "obj.house.table",
"kind": "object",
"w": 50,
"h": 36,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/table.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 50,
"h": 36,
"sheet": 0,
"x": 895,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT001: the shape is symmetric (cloth edges, front drop, legs at cols 2-4 and 45-47). The differences are the checker phase (12 cells of 4 px cannot mirror onto themselves) and the set dressing (teapot, bread, plates, cups), which is deliberately casual. Lesson 1 covers shapes, not the place settings"
]
}
},
{
"id": "obj.house.toilet",
"kind": "object",
"w": 14,
"h": 21,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/toilet.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 14,
"h": 21,
"sheet": 0,
"x": 1937,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:32",
"note": "before critic",
"w": 14,
"h": 21,
"sheet": 0,
"x": 1952,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the bowl has a hole: pixels (3,11), (3,12) and (4-7,13) are transparent, so the floor shows through inside the bowl",
"the bowl opening sits about 1 px left of centre: the rim is 1 px wide on the left (cols 1-2) and 3 px wide on the right (cols 10-12), and the front rim D is at cols 4-7 on a 14 px sprite whose axis falls between cols 6 and 7. The tank and pedestal are centred, so the bowl looks crooked"
],
"before_version": 1,
"overruled": [
"CRT003: the flush handle on the tank: a deliberate 1 px detail, one-sided as on a real toilet"
]
}
},
{
"id": "obj.house.toy_chest",
"kind": "object",
"w": 20,
"h": 16,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/toy_chest.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 16,
"sheet": 0,
"x": 1451,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "panel",
"date": "2026-10-30",
"fixed": [
"white body instead of ochre, for contrast with the floor"
],
"backfill": "re-checked 2026-10-30: pass"
}
},
{
"id": "obj.house.tub",
"kind": "object",
"w": 48,
"h": 33,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/tub.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 48,
"h": 33,
"sheet": 0,
"x": 987,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.tv_stand",
"kind": "object",
"w": 40,
"h": 33,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/tv_stand.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 40,
"h": 33,
"sheet": 0,
"x": 1036,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:36",
"note": "before critic",
"w": 40,
"h": 33,
"sheet": 0,
"x": 1077,
"y": 884
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"before_version": 1,
"overruled": [
"CRT003: the power LED on the console in the left cubby: a deliberate 1 px glint"
]
}
},
{
"id": "obj.house.wall_bath",
"kind": "object",
"w": 116,
"h": 28,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/wall_bath.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 116,
"h": 28,
"sheet": 0,
"x": 1827,
"y": 1185
}
]
},
"draft": [
"wallpaper-blue"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.wall_dining",
"kind": "object",
"w": 52,
"h": 28,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/wall_dining.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 52,
"h": 28,
"sheet": 0,
"x": 438,
"y": 1216
}
]
},
"draft": [
"wallpaper"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.wall_halfbath",
"kind": "object",
"w": 72,
"h": 28,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/wall_halfbath.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 72,
"h": 28,
"sheet": 0,
"x": 170,
"y": 1216
}
]
},
"draft": [
"wallpaper-blue"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.wall_siblings",
"kind": "object",
"w": 100,
"h": 28,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/wall_siblings.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 100,
"h": 28,
"sheet": 0,
"x": 1944,
"y": 1185
}
]
},
"draft": [
"wallpaper"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house.washer",
"kind": "object",
"w": 20,
"h": 30,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/washer.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 20,
"h": 30,
"sheet": 0,
"x": 172,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:40:33",
"note": "before critic",
"w": 20,
"h": 30,
"sheet": 0,
"x": 193,
"y": 1185
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the wicker basket on top has no bottom edge of its own: its lowest row (row 4, cols 4-14, L) replaces the washer's top outline, so basket and washer share one line"
],
"before_version": 1,
"overruled": [
"CRT003: an indicator light on the control strip: a deliberate 1 px detail"
]
}
},
{
"id": "obj.house.wood_stove",
"kind": "object",
"w": 32,
"h": 42,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/wood_stove.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 32,
"h": 42,
"sheet": 0,
"x": 130,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: a glint on the blue kettle: a deliberate 1 px highlight"
]
}
},
{
"id": "obj.house.woodbox",
"kind": "object",
"w": 13,
"h": 16,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/woodbox.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 13,
"h": 16,
"sheet": 0,
"x": 969,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.house_saltbox",
"kind": "object",
"w": 80,
"h": 102,
"tags": [
"building",
"house"
],
"source": "art/objects/buildings/house_saltbox.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 571,
"y": 722
}
],
"restored": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 652,
"y": 722
}
],
"restored_white": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 733,
"y": 722
}
],
"restored_ochre": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 814,
"y": 722
}
],
"restored_blue": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 895,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:35",
"note": "v1 proof asset, overnight build",
"w": 80,
"h": 102,
"sheet": 0,
"x": 976,
"y": 722
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: weathered base: 44,83 is the 1 px brass door knob, 41,90 a worn spot on the door, 73,66 a bare-wood fleck in the peeling red paint. All deliberate details"
]
}
},
{
"id": "obj.lobster_pot",
"kind": "object",
"w": 14,
"h": 10,
"tags": [
"prop",
"harbour",
"fishery"
],
"source": "art/objects/props/lobster_pot.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 14,
"h": 10,
"sheet": 0,
"x": 1383,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT001: silhouette and lath rows are symmetric; the differences are the gaps and twine flecks between laths, an irregular hand-made texture not visible at 1x"
]
}
},
{
"id": "obj.lobster_pots_stack",
"kind": "object",
"w": 27,
"h": 17,
"tags": [
"prop",
"harbour",
"fishery"
],
"source": "art/objects/props/lobster_pots_stack.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 27,
"h": 17,
"sheet": 0,
"x": 768,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: the brown twine/lath pixels in the pot sides, the same pattern as obj.lobster_pot: deliberate texture"
]
}
},
{
"id": "obj.punt",
"kind": "object",
"w": 100,
"h": 29,
"tags": [
"boat",
"harbour"
],
"source": "art/objects/harbour/punt.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 214,
"y": 1185
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 315,
"y": 1185
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 214,
"y": 1185
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 315,
"y": 1185
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 214,
"y": 1185
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 315,
"y": 1185
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 416,
"y": 1185
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 214,
"y": 1185
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 416,
"y": 1185
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 517,
"y": 1185
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 416,
"y": 1185
}
],
"weathered": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 618,
"y": 1185
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 719,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval (lengthened from 64 px for four seated siblings)",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:40",
"note": "v1 proof asset, overnight build",
"w": 64,
"h": 28,
"sheet": 0,
"x": 243,
"y": 1216
},
{
"v": 2,
"date": "2026-10-29T21:52:02",
"note": "64 px punt (A3), before the 4-seat lengthening",
"w": 64,
"h": 28,
"sheet": 0,
"x": 243,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT004: the stern transom's vertical shading next to the outboard, one column wide; not visible as banding at 1x",
"CRT006: the dark gunwale outline is close to sea-2, but the white hull and red sheer give strong contrast against the water at 1x (lesson 4 satisfied)"
]
}
},
{
"id": "obj.punt_sea_back",
"kind": "object",
"w": 100,
"h": 29,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_back.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 820,
"y": 1185
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 921,
"y": 1185
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 820,
"y": 1185
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 921,
"y": 1185
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 820,
"y": 1185
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 921,
"y": 1185
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1022,
"y": 1185
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 820,
"y": 1185
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1022,
"y": 1185
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1123,
"y": 1185
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1022,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T21:52:03",
"note": "64 px punt (A3), before the 4-seat lengthening",
"w": 64,
"h": 28,
"sheet": 0,
"x": 308,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"No meta.facing. The side view is drawn heading left (bow on the left), but that's recorded only as a comment in TwinkleGame.cs ('the side-view sprite is drawn heading left') and isn't in the asset."
]
}
},
{
"id": "obj.punt_sea_down_back",
"kind": "object",
"w": 33,
"h": 125,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_down_back.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 925,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 959,
"y": 361
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 925,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 959,
"y": 361
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 925,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 959,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 993,
"y": 361
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 925,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 993,
"y": 361
},
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1027,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 993,
"y": 361
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT005: the bow taper curves from straight sides into the stem (long steps easing to short ones), and obj.punt_sea_down_front's flare covers this edge in game"
]
}
},
{
"id": "obj.punt_sea_down_front",
"kind": "object",
"w": 33,
"h": 125,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_down_front.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1061,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1095,
"y": 361
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1061,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1095,
"y": 361
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1061,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1095,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1129,
"y": 361
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1061,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1163,
"y": 361
},
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1197,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 1163,
"y": 361
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.punt_sea_front",
"kind": "object",
"w": 100,
"h": 29,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_front.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1224,
"y": 1185
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1325,
"y": 1185
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1224,
"y": 1185
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1325,
"y": 1185
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1224,
"y": 1185
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1325,
"y": 1185
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1426,
"y": 1185
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1224,
"y": 1185
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1527,
"y": 1185
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1628,
"y": 1185
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1527,
"y": 1185
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T21:52:05",
"note": "64 px punt (A3), before the 4-seat lengthening",
"w": 64,
"h": 28,
"sheet": 0,
"x": 373,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"No meta.facing. The side view is drawn heading left (bow on the left), but that's recorded only as a comment in TwinkleGame.cs ('the side-view sprite is drawn heading left') and isn't in the asset."
],
"overruled": [
"CRT004: the outboard leg's cylinder shading; reads as a metal leg at 1x, and the outboard is already approved (as in round 1)"
]
}
},
{
"id": "obj.punt_sea_up_back",
"kind": "object",
"w": 33,
"h": 118,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_up_back.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1450,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1484,
"y": 361
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1450,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1484,
"y": 361
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1450,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1484,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1518,
"y": 361
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1450,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1518,
"y": 361
},
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1552,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1518,
"y": 361
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.punt_sea_up_front",
"kind": "object",
"w": 33,
"h": 118,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_up_front.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1586,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1620,
"y": 361
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1586,
"y": 361
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1620,
"y": 361
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1586,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1620,
"y": 361
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1654,
"y": 361
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1586,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1688,
"y": 361
},
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1722,
"y": 361
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1688,
"y": 361
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT004: the outboard leg's cylinder shading; 5 px, reads as a metal leg"
]
}
},
{
"id": "obj.rocks_m",
"kind": "object",
"w": 12,
"h": 7,
"tags": [
"prop",
"rock",
"coast"
],
"source": "art/objects/props/rocks_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 12,
"h": 7,
"sheet": 0,
"x": 1527,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.rocks_s",
"kind": "object",
"w": 7,
"h": 4,
"tags": [
"prop",
"rock",
"coast"
],
"source": "art/objects/props/rocks_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1674,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.rope_coil",
"kind": "object",
"w": 10,
"h": 6,
"tags": [
"prop",
"harbour",
"fishery"
],
"source": "art/objects/props/rope_coil.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 10,
"h": 6,
"sheet": 0,
"x": 1540,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.stage",
"kind": "object",
"w": 68,
"h": 68,
"tags": [
"building",
"harbour",
"stage"
],
"source": "art/objects/buildings/stage.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 68,
"h": 68,
"sheet": 0,
"x": 1315,
"y": 722
}
],
"restored": [
{
"ms": 0,
"w": 68,
"h": 68,
"sheet": 0,
"x": 1384,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:37",
"note": "v1 proof asset, overnight build",
"w": 68,
"h": 68,
"sheet": 0,
"x": 1315,
"y": 722
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: a fleck of old white paint on the weathered door lintel: deliberate weathering"
]
}
},
{
"id": "obj.truck_buyer",
"kind": "object",
"w": 64,
"h": 36,
"tags": [
"prop",
"vehicle"
],
"source": "art/objects/vehicles/truck_buyer.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 64,
"h": 36,
"sheet": 0,
"x": 765,
"y": 884
}
],
"empty": [
{
"ms": 0,
"w": 64,
"h": 36,
"sheet": 0,
"x": 830,
"y": 884
}
]
},
"draft": [
"plastic-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:43:43",
"note": "before critic",
"w": 64,
"h": 36,
"sheet": 0,
"x": 765,
"y": 884
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"facing isn't in the metadata. The sprite faces LEFT (west): hood, headlight and amber marker at x 0-8, cab at x 18-38, bed and red tail light at x 40-63. Only the YAML comment says so; meta has just the shadow",
"in the painted harbour the truck is baked flat into ground.png in the lay-by (about map x 508-572, y 346-382), and walk.png is walkable across its whole footprint. Players draw over a 36 px tall truck and can walk through it"
],
"before_version": 1,
"overruled": [
"CRT003: deliberate glint on the windshield's A-pillar edge",
"CRT003: the same windshield glint, second pixel",
"CRT003: deliberate amber marker/turn lamp under the headlight"
]
}
},
{
"id": "obj.tuckamore_l",
"kind": "object",
"w": 40,
"h": 36,
"tags": [
"plant",
"tree",
"coast"
],
"source": "art/objects/plants/tuckamore_l.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 40,
"h": 36,
"sheet": 0,
"x": 946,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:44",
"note": "v1 proof asset, overnight build",
"w": 40,
"h": 36,
"sheet": 0,
"x": 946,
"y": 884
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.tuckamore_m",
"kind": "object",
"w": 24,
"h": 28,
"tags": [
"plant",
"tree",
"coast"
],
"source": "art/objects/plants/tuckamore_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 24,
"h": 28,
"sheet": 0,
"x": 528,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:44",
"note": "v1 proof asset, overnight build",
"w": 24,
"h": 28,
"sheet": 0,
"x": 528,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.tuckamore_s",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"plant",
"tree",
"coast"
],
"source": "art/objects/plants/tuckamore_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 2023,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:43",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 2023,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.wharf_post",
"kind": "object",
"w": 6,
"h": 20,
"tags": [
"harbour",
"wharf"
],
"source": "art/objects/buildings/wharf_post.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 6,
"h": 20,
"sheet": 0,
"x": 780,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:38",
"note": "v1 proof asset, overnight build",
"w": 6,
"h": 20,
"sheet": 0,
"x": 780,
"y": 1266
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "obj.woodpile",
"kind": "object",
"w": 24,
"h": 15,
"tags": [
"prop",
"house",
"firewood"
],
"source": "art/objects/props/woodpile.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 24,
"h": 15,
"sheet": 0,
"x": 1123,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "crop",
"assets": [
{
"id": "crop.potato.s1",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"crop",
"plant"
],
"source": "art/objects/plants/potato.yaml",
"generator": "growth_stages",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 34,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:41",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 34,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "crop.potato.s2",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"crop",
"plant"
],
"source": "art/objects/plants/potato.yaml",
"generator": "growth_stages",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 51,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:42",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 51,
"y": 1306
}
]
},
{
"id": "crop.potato.s3",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"crop",
"plant"
],
"source": "art/objects/plants/potato.yaml",
"generator": "growth_stages",
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 68,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:42",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 68,
"y": 1306
}
]
}
]
},
{
"name": "item",
"assets": [
{
"id": "item.cod",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fish"
],
"source": "art/items/cod.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1802,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:45",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 1802,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "item.fish.cod",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fish",
"cod"
],
"source": "art/items/fish_cod.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1819,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T09:59:51",
"note": "before cod head rework",
"w": 16,
"h": 16,
"sheet": 0,
"x": 1836,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"request": "AD: the face is too rounded; match the NOAA cod (art/reference/_web/cod)",
"before_version": 1,
"fixed": [
"round blunt head made a wedge",
"body slimmed (no longer the pollock outline); fan tail",
"CRT005 belly flat removed",
"light turned to the top-left"
]
}
},
{
"id": "item.fish.flounder",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fish",
"flounder"
],
"source": "art/items/fish_flounder.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1853,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "item.fish.halibut",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fish",
"halibut"
],
"source": "art/items/fish_halibut.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1870,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "item.fish.mackerel",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fish",
"mackerel"
],
"source": "art/items/fish_mackerel.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1887,
"y": 1306
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:44:08",
"note": "before critic",
"w": 16,
"h": 16,
"sheet": 0,
"x": 1904,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"before_version": 1
}
},
{
"id": "item.fish.pollock",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fish",
"pollock"
],
"source": "art/items/fish_pollock.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1921,
"y": 1306
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT005: right edge steps 2-1-1-5-2-1: the curved back/tail root of an organic fish outline, not a straight diagonal; the long run is the deliberate curve"
]
}
},
{
"id": "item.fish.sculpin",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fish",
"sculpin"
],
"source": "art/items/fish_sculpin.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1938,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "item.handline_held",
"kind": "item",
"w": 3,
"h": 14,
"tags": [
"held",
"noexport"
],
"source": "art/items/held/handline_held.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 3,
"h": 14,
"sheet": 0,
"x": 859,
"y": 1340
},
{
"ms": 300,
"w": 3,
"h": 14,
"sheet": 0,
"x": 863,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "item.jigger",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fishing",
"tool"
],
"source": "art/items/jigger.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1955,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:45",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 1955,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "item.jigger_held",
"kind": "item",
"w": 10,
"h": 14,
"tags": [
"held",
"noexport"
],
"source": "art/items/held/jigger_held.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 10,
"h": 14,
"sheet": 0,
"x": 837,
"y": 1340
},
{
"ms": 300,
"w": 10,
"h": 14,
"sheet": 0,
"x": 848,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "item.phone_held",
"kind": "item",
"w": 3,
"h": 4,
"tags": [
"held",
"noexport"
],
"source": "art/items/held/phone_held.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 3,
"h": 4,
"sheet": 0,
"x": 1682,
"y": 1340
},
{
"ms": 110,
"w": 3,
"h": 4,
"sheet": 0,
"x": 1686,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
},
{
"id": "item.potato",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"crop",
"food"
],
"source": "art/items/potato.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1972,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:45",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 1972,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT003: a 1 px gap between the soil clod's outline and the left potato's outline; it reads as the space between lumps, not as a hole"
]
}
},
{
"id": "item.salt_bucket",
"kind": "item",
"w": 16,
"h": 16,
"tags": [
"icon",
"fishing",
"supply"
],
"source": "art/items/salt_bucket.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1989,
"y": 1306
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:46",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 1989,
"y": 1306
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "ui",
"assets": [
{
"id": "ui.button",
"kind": "ui",
"w": 24,
"h": 16,
"tags": [
"ui",
"kit",
"nine_slice"
],
"source": "art/ui/button.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 24,
"h": 16,
"sheet": 0,
"x": 1250,
"y": 1287
}
],
"hover": [
{
"ms": 0,
"w": 24,
"h": 16,
"sheet": 0,
"x": 1275,
"y": 1287
}
],
"pressed": [
{
"ms": 0,
"w": 24,
"h": 16,
"sheet": 0,
"x": 1300,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.catch_card",
"kind": "ui",
"w": 224,
"h": 112,
"tags": [
"catch",
"card",
"fishing"
],
"source": "art/ui/catch_card.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 224,
"h": 112,
"sheet": 0,
"x": 346,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.catch_card_pb",
"kind": "ui",
"w": 17,
"h": 24,
"tags": [
"catch",
"card",
"fishing"
],
"source": "art/ui/catch_card_pb.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 17,
"h": 24,
"sheet": 0,
"x": 1380,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.font",
"kind": "ui",
"w": 128,
"h": 77,
"tags": [
"ui",
"font",
"noexport"
],
"source": "art/ui/font/font.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 128,
"h": 77,
"sheet": 0,
"x": 1057,
"y": 722
}
],
"plain": [
{
"ms": 0,
"w": 128,
"h": 77,
"sheet": 0,
"x": 1186,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "ui.list_row",
"kind": "ui",
"w": 32,
"h": 14,
"tags": [
"ui",
"kit",
"nine_slice"
],
"source": "art/ui/list_row.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 32,
"h": 14,
"sheet": 0,
"x": 1148,
"y": 1323
}
],
"selected": [
{
"ms": 0,
"w": 32,
"h": 14,
"sheet": 0,
"x": 1181,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.logo",
"kind": "ui",
"w": 303,
"h": 115,
"tags": [
"ui",
"title"
],
"source": "art/ui/logo.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 303,
"h": 115,
"sheet": 0,
"x": 0,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"request": "AD: draft a Twinkle Cove welcome screen; game logos and title screens as inspiration; Newfoundland/fishing optional",
"fixed": [
"i stem no longer touches the C",
"stray dark ticks inside the letter fills removed",
"blue wave swash removed (AD - lesson 12)",
"hook-l narrowed so it reads as a lowercase l, not \"TwinkLe\"",
"AD round: all dark outlines removed (navy ring, then the near-black letter rims) - lesson 13"
]
}
},
{
"id": "ui.map.coast_dot",
"kind": "ui",
"w": 2,
"h": 2,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/coast_dot.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 2,
"h": 2,
"sheet": 0,
"x": 1690,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.gps",
"kind": "ui",
"w": 9,
"h": 9,
"tags": [
"phone",
"map",
"icon"
],
"source": "art/ui/map/gps.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 1422,
"y": 1340
}
],
"searching": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 1432,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.label",
"kind": "ui",
"w": 14,
"h": 11,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/label.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 14,
"h": 11,
"sheet": 0,
"x": 1311,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.land",
"kind": "ui",
"w": 16,
"h": 16,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/land.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 527,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.marker_p1",
"kind": "ui",
"w": 9,
"h": 9,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/marker_p1.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 1442,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.marker_p2",
"kind": "ui",
"w": 9,
"h": 9,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/marker_p2.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 1452,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.marker_p3",
"kind": "ui",
"w": 9,
"h": 9,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/marker_p3.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 1462,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.marker_p4",
"kind": "ui",
"w": 9,
"h": 9,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/marker_p4.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 1472,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.signal",
"kind": "ui",
"w": 11,
"h": 5,
"tags": [
"phone",
"map",
"icon"
],
"source": "art/ui/map/signal.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1559,
"y": 1340
}
],
"n0": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1571,
"y": 1340
}
],
"n1": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1583,
"y": 1340
}
],
"n2": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1595,
"y": 1340
}
],
"n3": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1607,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.map.water",
"kind": "ui",
"w": 16,
"h": 16,
"tags": [
"phone",
"map"
],
"source": "art/ui/map/water.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 544,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.panel",
"kind": "ui",
"w": 24,
"h": 24,
"tags": [
"ui",
"kit",
"nine_slice"
],
"source": "art/ui/panel.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 24,
"h": 24,
"sheet": 0,
"x": 1355,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.phone_app_icons",
"kind": "ui",
"w": 64,
"h": 16,
"tags": [
"phone",
"icon"
],
"source": "art/ui/phone_app_icons.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 64,
"h": 16,
"sheet": 0,
"x": 826,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:47",
"note": "v1 proof asset, overnight build",
"w": 64,
"h": 16,
"sheet": 0,
"x": 826,
"y": 1287
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ui.phone_frame",
"kind": "ui",
"w": 72,
"h": 120,
"tags": [
"phone",
"menu"
],
"source": "art/ui/phone_frame.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 72,
"h": 120,
"sheet": 0,
"x": 1231,
"y": 361
}
],
"no_signal": [
{
"ms": 0,
"w": 72,
"h": 120,
"sheet": 0,
"x": 1304,
"y": 361
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:46",
"note": "v1 proof asset, overnight build",
"w": 72,
"h": 120,
"sheet": 0,
"x": 1377,
"y": 361
},
{
"v": 2,
"date": "2026-10-30T00:44:06",
"note": "before critic",
"w": 72,
"h": 120,
"sheet": 0,
"x": 1377,
"y": 361
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the clock '6:04' is baked into the status layer, so the phone home screen would show a frozen time; ui.phone_map leaves the clock to the engine (points.status_time) and takes signal from ui.map.signal, so the two phones disagree"
],
"before_version": 2
}
},
{
"id": "ui.phone_map",
"kind": "ui",
"w": 120,
"h": 200,
"tags": [
"phone",
"map",
"menu"
],
"source": "art/ui/phone_map.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 120,
"h": 200,
"sheet": 0,
"x": 641,
"y": 361
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:44:07",
"note": "before critic",
"w": 120,
"h": 200,
"sheet": 0,
"x": 762,
"y": 361
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the rounded screen corners are left clear: 3-5 transparent pixels inside the bezel at each inner screen corner (top-left x5-7 y7-9; top-right x112-114 y6-8; bottom-left x5-7 y189-191; bottom-right x112-114 y190-191, plus a gap at x106-108 y187-189 beside the zoom buttons), so the game world shows through as coloured specks at 1x"
],
"before_version": 1
}
},
{
"id": "ui.title_bg",
"kind": "ui",
"w": 640,
"h": 360,
"tags": [
"ui",
"title"
],
"source": "art/ui/title_bg.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 420,
"w": 640,
"h": 360,
"sheet": 0,
"x": 0,
"y": 0
},
{
"ms": 420,
"w": 640,
"h": 360,
"sheet": 0,
"x": 641,
"y": 0
},
{
"ms": 420,
"w": 640,
"h": 360,
"sheet": 0,
"x": 1282,
"y": 0
},
{
"ms": 420,
"w": 640,
"h": 360,
"sheet": 0,
"x": 0,
"y": 361
}
]
},
"draft": [
"brick",
"flower-purple",
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"request": "AD: draft a Twinkle Cove welcome screen; game logos and title screens as inspiration; Newfoundland/fishing optional",
"fixed": [
"land and houses dropped to dusk values with sun-side rims",
"sunset glow domed over the sun, sky bands broken up",
"house sizes grow toward the water (perspective was inverted)",
"saltbox gable profiles; one house in the in-game family-home look",
"shore broken into ledges and a shadowed cliff (read as a seawall)",
"stage on posts over the water; punt sheer and stem; lighthouse pad",
"AD round: all dark outlines removed; forms by value and hue (lesson 13)",
"AD round: lighthouse on the headland's peak, keeper's house below (lesson 14)"
],
"overruled": [
"symmetry (family-home facade): withdrawn by the shape critic; the extra windows are on the gable end, the front is 3 up, window-door-window down"
]
}
}
]
},
{
"name": "chr.elder_woman",
"assets": [
{
"id": "chr.elder_woman.idle.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"idle"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1222,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1239,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1222,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1256,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1273,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1290,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1273,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1307,
"y": 884
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1324,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1341,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1324,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1358,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.elder_woman.idle.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"idle"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1375,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1392,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1375,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1409,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1426,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1443,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1426,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1460,
"y": 884
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1477,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1494,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1477,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1511,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.elder_woman.idle.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"idle"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1528,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1545,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1528,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1562,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1579,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1596,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1579,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1613,
"y": 884
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1630,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1647,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1630,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1664,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.elder_woman.idle.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"idle"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1681,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1681,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1681,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1698,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1715,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1715,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1715,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1732,
"y": 884
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1749,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1749,
"y": 884
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1749,
"y": 884
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1766,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.elder_woman.walk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"walk"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1783,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1222,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1800,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1222,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1817,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1273,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1834,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1273,
"y": 884
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1851,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1324,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1868,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1324,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.elder_woman.walk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"walk"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1885,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1375,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1902,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1375,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1919,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1426,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1936,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1426,
"y": 884
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1953,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1477,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1970,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1477,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.elder_woman.walk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"walk"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1987,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1528,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2004,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1528,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2021,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1579,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1579,
"y": 884
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1630,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1630,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.elder_woman.walk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"elder_woman",
"walk"
],
"source": "art/characters/elder_woman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1681,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1681,
"y": 884
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1715,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1715,
"y": 884
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1749,
"y": 884
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1749,
"y": 884
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "chr.fisherman",
"assets": [
{
"id": "chr.fisherman.idle.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"idle"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 921
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 921
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.fisherman.idle.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"idle"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 921
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 921
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.fisherman.idle.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"idle"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 921
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 921
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.fisherman.idle.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"idle"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 921
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 921
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.fisherman.walk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"walk"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 921
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 921
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.fisherman.walk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"walk"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 921
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 921
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.fisherman.walk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"walk"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 921
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 921
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.fisherman.walk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"fisherman",
"walk"
],
"source": "art/characters/fisherman/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 921
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 921
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 921
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "chr.mom",
"assets": [
{
"id": "chr.mom.idle.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"idle"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 921
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.idle.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"idle"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 921
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.idle.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"idle"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 921
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.idle.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"idle"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 921
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.talk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"talk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 921
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.talk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"talk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 921
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.talk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"talk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 921
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.talk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"talk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 921
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 921
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 921
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.walk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"walk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 921
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.walk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"walk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 921
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.walk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"walk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 921
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.mom.walk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"mom",
"walk"
],
"source": "art/characters/mom/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 921
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 921
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "chr.player",
"assets": [
{
"id": "chr.player.idle.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"idle"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 954
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 954
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:48",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 954
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.idle.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"idle"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 954
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 954
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.idle.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"idle"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 954
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 954
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.idle.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"idle"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 954
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 954
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 954
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 954
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.jig.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"jig"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 954
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 954
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.jig.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"jig"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 954
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 954
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.jig.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"jig"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 954
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 954
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:50",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 954
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.jig.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"jig"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 954
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 954
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 954
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 954
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.walk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"walk"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 954
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 954
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:49",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 954
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.walk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"walk"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 954
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 954
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.walk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"walk"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 954
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 954
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:49",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 954
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.player.walk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"player",
"walk"
],
"source": "art/characters/player/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 954
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 954
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 954
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 954
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "chr.sibling_f",
"assets": [
{
"id": "chr.sibling_f.boat_jig.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_jig"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 954
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 954
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 954
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 954
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 954
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 954
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 954
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 987
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 987
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 987
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:30:54",
"note": "before critic",
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 987
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"before_version": 1
}
},
{
"id": "chr.sibling_f.boat_jig.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_jig"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 987
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 987
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 987
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 987
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 987
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_jig.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_jig"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 987
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 987
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 987
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 987
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 987
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_jig.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_jig"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 987
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 987
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 987
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 987
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 987
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 987
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 987
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 987
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:30:55",
"note": "before critic",
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 987
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"before_version": 1
}
},
{
"id": "chr.sibling_f.boat_pull.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_pull"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 987
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 987
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 987
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 987
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 987
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_pull.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_pull"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 987
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 987
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 987
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 987
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 987
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_pull.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_pull"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 987
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 987
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 1020
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1020
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1020
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_pull.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_pull"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1020
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1020
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1020
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1020
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 1020
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_sit.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_sit"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1020
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1020
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1020
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1020
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_sit.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_sit"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1020
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1020
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1020
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1020
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_sit.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_sit"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1020
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1020
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1020
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1020
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.boat_sit.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"boat_sit"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1020
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1020
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1020
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 1020
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1020
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1020
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.idle.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"idle"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 1020
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 1020
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 1020
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 1020
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.idle.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"idle"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 1020
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 1020
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 1020
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 1020
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.idle.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"idle"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 1020
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 1020
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 1020
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 1020
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 1020
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 1053
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1020
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 1053
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.idle.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"idle"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1053
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1053
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 1053
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1053
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1053
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1053
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1053
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1053
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 1053
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1053
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1053
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 1053
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1053
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1053
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1053
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.walk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"walk"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1020
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1020
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1020
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1020
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.walk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"walk"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1020
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1020
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1020
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1020
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.walk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"walk"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1020
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1020
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1020
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1020
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1020
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1020
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_f.walk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_f",
"walk"
],
"source": "art/characters/sibling_f/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1053
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1053
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1053
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1053
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1053
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1053
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "chr.sibling_m",
"assets": [
{
"id": "chr.sibling_m.boat_jig.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_jig"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 1053
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 1053
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1053
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 1053
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1053
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:30:51",
"note": "before critic",
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1053
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"In obj.punt_sea_down_back/front the handline goes over the port gunwale, screen right (line_N at x 27-30), but this pose jigs with arm_r, so the held line hangs on screen left (starboard), x 3, about 18 px from line_N, and ends on the floorboards next to the tub. In the punt the line in the hand and the line in the water are on opposite sides of the boat."
],
"before_version": 1
}
},
{
"id": "chr.sibling_m.boat_jig.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_jig"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 1053
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1053
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 1053
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 1053
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1053
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_jig.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_jig"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 1053
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 1053
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1053
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 1053
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 1053
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_jig.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_jig"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1053
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 1053
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 1053
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1053
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 1086
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 1086
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1086
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 1086
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1086
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1086
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1086
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 1086
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1086
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 1086
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1086
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1086
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 1086
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:30:53",
"note": "before critic",
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 1086
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"In obj.punt_sea_up_back/front the handline goes over the port gunwale, screen left (line_N at x 2-7), but this pose jigs with arm_r, so the held line hangs on screen right (starboard), x 12, about 18 px from line_N, and ends on the floorboards. In the punt the line in the hand and the line in the water are on opposite sides of the boat."
],
"before_version": 1
}
},
{
"id": "chr.sibling_m.boat_pull.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_pull"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1086
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 1086
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 1086
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 1086
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1086
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_pull.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_pull"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 1086
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 1086
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1086
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 1086
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 1086
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_pull.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_pull"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1086
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 1086
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 1086
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1086
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1086
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_pull.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_pull"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1086
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 1086
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 1086
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 1086
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 1086
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 1086
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_sit.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_sit"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 1086
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 1086
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 1086
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 1086
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 1086
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_sit.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_sit"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 1086
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 1086
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 1086
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 1086
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 1086
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 1086
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_sit.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_sit"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1086
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1086
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 1119
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1119
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 1119
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1119
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.boat_sit.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"boat_sit"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 1119
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1119
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 1119
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 1119
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1119
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1119
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.idle.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"idle"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1119
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 1119
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1119
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 1119
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.idle.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"idle"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 1119
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1119
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 1119
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 1119
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.idle.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"idle"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1119
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 1119
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 1119
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 1119
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.idle.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"idle"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1119
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1119
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 1119
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 1119
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1119
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.walk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"walk"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1119
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1119
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1119
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1119
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.walk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"walk"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1119
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1119
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1119
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1119
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.walk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"walk"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1119
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1119
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1119
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1119
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.sibling_m.walk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"sibling_m",
"walk"
],
"source": "art/characters/sibling_m/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1119
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1119
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1119
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1119
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1119
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "chr.youth",
"assets": [
{
"id": "chr.youth.idle.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"idle"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1119
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.idle.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"idle"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.idle.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"idle"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.idle.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"idle"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1152
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1152
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.phone.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"phone"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.phone.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"phone"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.phone.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"phone"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.phone.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"phone"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1152
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1152
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1152
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1152
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 1152
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.walk.down",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"walk"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1119
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 1119
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.walk.left",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"walk"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.walk.right",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"walk"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "chr.youth.walk.up",
"kind": "character",
"w": 16,
"h": 32,
"tags": [
"character",
"youth",
"walk"
],
"source": "art/characters/youth/character.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 1152
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 1152
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 1152
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "tile",
"assets": [
{
"id": "tile.lazybed",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"ground",
"garden",
"texture"
],
"source": "art/tiles/lazybed.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 476,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:43",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 476,
"y": 1323
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "tile.wharf_deck",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"harbour",
"wharf"
],
"source": "art/tiles/wharf_deck.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:39",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 1323
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "tile.wharf_deck_edge_s",
"kind": "tile",
"w": 16,
"h": 16,
"tags": [
"harbour",
"wharf",
"edge"
],
"source": "art/tiles/wharf_deck_edge_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 16,
"h": 16,
"sheet": 0,
"x": 510,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-29T00:47:39",
"note": "v1 proof asset, overnight build",
"w": 16,
"h": 16,
"sheet": 0,
"x": 510,
"y": 1323
}
],
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "ani",
"assets": [
{
"id": "ani.dog.idle.down",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/idle_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 986,
"y": 1266
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1010,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 986,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1034,
"y": 1266
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1058,
"y": 1266
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1082,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1058,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1106,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.idle.left",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog",
"mirrored"
],
"source": "art/animals/dog/idle_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1130,
"y": 1266
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1154,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1178,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1202,
"y": 1266
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1226,
"y": 1266
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1250,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1274,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1298,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.idle.right",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/idle_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1322,
"y": 1266
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1346,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1370,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1394,
"y": 1266
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1418,
"y": 1266
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1442,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1466,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1490,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.idle.up",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/idle_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1514,
"y": 1266
},
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1538,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1514,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1562,
"y": 1266
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1586,
"y": 1266
},
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1610,
"y": 1266
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1586,
"y": 1266
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1634,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit.down",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/sit_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 986,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1658,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1658,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1682,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1706,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1682,
"y": 1266
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1058,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1730,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1730,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1754,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1778,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1754,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit.left",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog",
"mirrored"
],
"source": "art/animals/dog/sit_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1130,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1802,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1802,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1826,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1850,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1826,
"y": 1266
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1226,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1874,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1874,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1898,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1922,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1898,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit.right",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/sit_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1322,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1946,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1946,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1970,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1994,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1970,
"y": 1266
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1418,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2018,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2018,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 24,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit.up",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/sit_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1514,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 72,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 96,
"y": 1287
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1586,
"y": 1266
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 144,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 168,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit_idle.down",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/sit_idle_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1658,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1682,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1706,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1682,
"y": 1266
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1730,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1754,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1778,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1754,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit_idle.left",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog",
"mirrored"
],
"source": "art/animals/dog/sit_idle_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1802,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1826,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1850,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1826,
"y": 1266
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1874,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1898,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1922,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1898,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit_idle.right",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/sit_idle_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1946,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1970,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1994,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1970,
"y": 1266
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2018,
"y": 1266
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 24,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.sit_idle.up",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/sit_idle_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 72,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 96,
"y": 1287
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 144,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 1287
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 168,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.walk.down",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/walk_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 192,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 216,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 240,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 216,
"y": 1287
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 264,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 288,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 312,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 288,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.walk.left",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog",
"mirrored"
],
"source": "art/animals/dog/walk_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 336,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 360,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 384,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 360,
"y": 1287
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 408,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 432,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 456,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 432,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.walk.right",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/walk_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 480,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 504,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 528,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 504,
"y": 1287
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 552,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 576,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 600,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 576,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.dog.walk.up",
"kind": "object",
"w": 23,
"h": 18,
"tags": [
"animal",
"dog"
],
"source": "art/animals/dog/walk_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 624,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 648,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 672,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 648,
"y": 1287
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 696,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 720,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 744,
"y": 1287
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 720,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.fly.down",
"kind": "object",
"w": 20,
"h": 26,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/fly_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 110,
"w": 20,
"h": 26,
"sheet": 0,
"x": 617,
"y": 1216
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 638,
"y": 1216
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 659,
"y": 1216
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 638,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.fly.left",
"kind": "object",
"w": 20,
"h": 26,
"tags": [
"animal",
"bird",
"gull",
"mirrored"
],
"source": "art/animals/gull/fly_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 110,
"w": 20,
"h": 26,
"sheet": 0,
"x": 680,
"y": 1216
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 701,
"y": 1216
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 722,
"y": 1216
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 743,
"y": 1216
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 722,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT005: The raised wing's outline (wingtip, then elbow), not a straight diagonal. The sprite is a mirror of fly.right, which doesn't trigger the check; the step pattern is the wing's shape."
]
}
},
{
"id": "ani.gull.fly.right",
"kind": "object",
"w": 20,
"h": 26,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/fly_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 110,
"w": 20,
"h": 26,
"sheet": 0,
"x": 764,
"y": 1216
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 785,
"y": 1216
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 806,
"y": 1216
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 827,
"y": 1216
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 806,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.fly.up",
"kind": "object",
"w": 20,
"h": 26,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/fly_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 110,
"w": 20,
"h": 26,
"sheet": 0,
"x": 848,
"y": 1216
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 869,
"y": 1216
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 890,
"y": 1216
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 869,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.glide.left",
"kind": "object",
"w": 20,
"h": 26,
"tags": [
"animal",
"bird",
"gull",
"mirrored"
],
"source": "art/animals/gull/glide_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 722,
"y": 1216
},
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 911,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT005: The spread wing's outline (wingtip, then the leading edge, then the head), not one diagonal. It's a mirror of glide.right, which passes the check."
]
}
},
{
"id": "ani.gull.glide.right",
"kind": "object",
"w": 20,
"h": 26,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/glide_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 806,
"y": 1216
},
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 932,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.idle.down",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/idle_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1600,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1472,
"y": 1287
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1489,
"y": 1287
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1472,
"y": 1287
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1506,
"y": 1287
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1472,
"y": 1287
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1489,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.idle.left",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull",
"mirrored"
],
"source": "art/animals/gull/idle_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 1600,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1523,
"y": 1287
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1540,
"y": 1287
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1523,
"y": 1287
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1557,
"y": 1287
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1523,
"y": 1287
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1540,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.idle.right",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/idle_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1600,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1574,
"y": 1287
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1591,
"y": 1287
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1574,
"y": 1287
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1608,
"y": 1287
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1574,
"y": 1287
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1591,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.idle.up",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/idle_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1800,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1625,
"y": 1287
},
{
"ms": 1000,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1642,
"y": 1287
},
{
"ms": 1200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1625,
"y": 1287
},
{
"ms": 600,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1642,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.squawk.down",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/squawk_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1659,
"y": 1287
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1676,
"y": 1287
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1693,
"y": 1287
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1676,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.squawk.left",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull",
"mirrored"
],
"source": "art/animals/gull/squawk_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1710,
"y": 1287
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1727,
"y": 1287
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1744,
"y": 1287
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1727,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.squawk.right",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/squawk_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1761,
"y": 1287
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1778,
"y": 1287
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1795,
"y": 1287
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1778,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.squawk.up",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/squawk_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1812,
"y": 1287
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1829,
"y": 1287
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1846,
"y": 1287
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1829,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.walk.down",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/walk_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1863,
"y": 1287
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1472,
"y": 1287
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1880,
"y": 1287
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1472,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.walk.left",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull",
"mirrored"
],
"source": "art/animals/gull/walk_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1897,
"y": 1287
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1914,
"y": 1287
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1931,
"y": 1287
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1948,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.walk.right",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/walk_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1965,
"y": 1287
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1982,
"y": 1287
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1999,
"y": 1287
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 2016,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.gull.walk.up",
"kind": "object",
"w": 16,
"h": 16,
"tags": [
"animal",
"bird",
"gull"
],
"source": "art/animals/gull/walk_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 0,
"y": 1306
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1625,
"y": 1287
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 17,
"y": 1306
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1625,
"y": 1287
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.idle.down",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/idle_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1214,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1230,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1214,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1246,
"y": 1323
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1262,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1278,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1262,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1294,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.idle.left",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen",
"mirrored"
],
"source": "art/animals/hen/idle_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1310,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1326,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1310,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1342,
"y": 1323
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1358,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1374,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1358,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1390,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.idle.right",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/idle_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1406,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1422,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1406,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1438,
"y": 1323
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1454,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1470,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1454,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1486,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.idle.up",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/idle_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1502,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1518,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1502,
"y": 1323
},
{
"ms": 220,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1534,
"y": 1323
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1550,
"y": 1323
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1566,
"y": 1323
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1550,
"y": 1323
},
{
"ms": 220,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1582,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.peck.down",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/peck_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1214,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1598,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1614,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1598,
"y": 1323
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1262,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1630,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1646,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1630,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:33:27",
"note": "before critic",
"w": 15,
"h": 14,
"sheet": 0,
"x": 1214,
"y": 1323
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"frame 3 pops: head_peck (offset [4,7]) lands exactly on the body (rows 7-11) and hides it, and rows 2-6 go empty. For 120 ms the hen drops from 10 rows of body+head to a 5-row dark wedge on legs and the brown breast vanishes. The peck reads as the hen collapsing, unlike peck.right where the body stays put and only the head dips"
],
"before_version": 1
}
},
{
"id": "ani.hen.peck.left",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen",
"mirrored"
],
"source": "art/animals/hen/peck_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1310,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1662,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1678,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1662,
"y": 1323
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1358,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1694,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1710,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1694,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.peck.right",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/peck_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1406,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1726,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1742,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1726,
"y": 1323
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1454,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1758,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1774,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1758,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.peck.up",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/peck_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1502,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1790,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1806,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1790,
"y": 1323
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1550,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1822,
"y": 1323
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1838,
"y": 1323
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1822,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:34:19",
"note": "before critic",
"w": 15,
"h": 14,
"sheet": 0,
"x": 1502,
"y": 1323
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"before_version": 1
}
},
{
"id": "ani.hen.walk.down",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/walk_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1854,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1214,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1870,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1214,
"y": 1323
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1886,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1262,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1902,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1262,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.walk.left",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen",
"mirrored"
],
"source": "art/animals/hen/walk_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1918,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1934,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1950,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1966,
"y": 1323
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1982,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1998,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 2014,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 2030,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.walk.right",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/walk_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 0,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 16,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 32,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 48,
"y": 1340
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 64,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 80,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 96,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 112,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.hen.walk.up",
"kind": "object",
"w": 15,
"h": 14,
"tags": [
"animal",
"hen"
],
"source": "art/animals/hen/walk_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 128,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1502,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 144,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1502,
"y": 1323
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 160,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1550,
"y": 1323
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 176,
"y": 1340
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1550,
"y": 1323
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.fish.down",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/fish_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 192,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 207,
"y": 1340
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 192,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 207,
"y": 1340
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 192,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 222,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.fish.left",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin",
"mirrored"
],
"source": "art/animals/puffin/fish_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 237,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 252,
"y": 1340
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 237,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 252,
"y": 1340
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 237,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 267,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.fish.right",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/fish_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 282,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 297,
"y": 1340
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 282,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 297,
"y": 1340
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 282,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 312,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.fish.up",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/fish_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 327,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 342,
"y": 1340
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 327,
"y": 1340
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 342,
"y": 1340
},
{
"ms": 800,
"w": 14,
"h": 14,
"sheet": 0,
"x": 327,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.fly.left",
"kind": "object",
"w": 16,
"h": 22,
"tags": [
"animal",
"bird",
"puffin",
"mirrored"
],
"source": "art/animals/puffin/fly_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 75,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1786,
"y": 1216
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1803,
"y": 1216
},
{
"ms": 80,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1820,
"y": 1216
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1803,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT005: the top edge is the union of the raised wing spike and the head/back; that's a deliberate wing shape across frames, not an uneven diagonal"
]
}
},
{
"id": "ani.puffin.fly.right",
"kind": "object",
"w": 16,
"h": 22,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/fly_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 75,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1837,
"y": 1216
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1854,
"y": 1216
},
{
"ms": 80,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1871,
"y": 1216
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1854,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.idle.down",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/idle_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1400,
"w": 14,
"h": 14,
"sheet": 0,
"x": 357,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 372,
"y": 1340
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 357,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 387,
"y": 1340
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 357,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 387,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 372,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.idle.left",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin",
"mirrored"
],
"source": "art/animals/puffin/idle_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 1400,
"w": 14,
"h": 14,
"sheet": 0,
"x": 402,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 417,
"y": 1340
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 402,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 432,
"y": 1340
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 402,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 432,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 417,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.idle.right",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/idle_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1400,
"w": 14,
"h": 14,
"sheet": 0,
"x": 447,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 462,
"y": 1340
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 447,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 477,
"y": 1340
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 447,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 477,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 462,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.idle.up",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/idle_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1400,
"w": 14,
"h": 14,
"sheet": 0,
"x": 492,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 507,
"y": 1340
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 492,
"y": 1340
},
{
"ms": 400,
"w": 14,
"h": 14,
"sheet": 0,
"x": 522,
"y": 1340
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 492,
"y": 1340
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 507,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.walk.down",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/walk_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 537,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 357,
"y": 1340
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 552,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 357,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.puffin.walk.left",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin",
"mirrored"
],
"source": "art/animals/puffin/walk_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 567,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 582,
"y": 1340
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 597,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 612,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT005: the right edge is the bird's back: round nape, straight 4-px back, then the tail. A real puffin silhouette, not a jaggy diagonal"
]
}
},
{
"id": "ani.puffin.walk.right",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/walk_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 627,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 642,
"y": 1340
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 657,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 672,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30",
"overruled": [
"CRT005: the left edge is the bird's back: round nape, straight 4-px back, then the tail. A real puffin silhouette, not a jaggy diagonal"
]
}
},
{
"id": "ani.puffin.walk.up",
"kind": "object",
"w": 14,
"h": 14,
"tags": [
"animal",
"bird",
"puffin"
],
"source": "art/animals/puffin/walk_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 687,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 492,
"y": 1340
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 702,
"y": 1340
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 492,
"y": 1340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.graze.down",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/graze_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 0,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 26,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 52,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 26,
"y": 1245
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 78,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 104,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 130,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 104,
"y": 1245
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 156,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 182,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 208,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 182,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.graze.left",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep",
"mirrored"
],
"source": "art/animals/sheep/graze_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 234,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 260,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 286,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 260,
"y": 1245
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 312,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 338,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 364,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 338,
"y": 1245
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 390,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 416,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 442,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 416,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.graze.right",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/graze_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 468,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 494,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 520,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 494,
"y": 1245
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 546,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 572,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 598,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 572,
"y": 1245
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 624,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 650,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 676,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 650,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.graze.up",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/graze_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 702,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 728,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 702,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 754,
"y": 1245
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 780,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 806,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 780,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 832,
"y": 1245
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 858,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 884,
"y": 1245
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 858,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 910,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.idle.down",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/idle_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 936,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 962,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 936,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 988,
"y": 1245
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1014,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1040,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1014,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1066,
"y": 1245
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1092,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1118,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1092,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1144,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.idle.left",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep",
"mirrored"
],
"source": "art/animals/sheep/idle_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1170,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1196,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1170,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1222,
"y": 1245
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1248,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1274,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1248,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1300,
"y": 1245
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1326,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1352,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1326,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1378,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.idle.right",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/idle_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1404,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1430,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1404,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1456,
"y": 1245
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1482,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1508,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1482,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1534,
"y": 1245
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1560,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1586,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1560,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1612,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.idle.up",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/idle_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1638,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1664,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1638,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1690,
"y": 1245
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1716,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1742,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1716,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1768,
"y": 1245
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1794,
"y": 1245
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1820,
"y": 1245
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1794,
"y": 1245
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1846,
"y": 1245
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.walk.down",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/walk_down.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1872,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1898,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1924,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1898,
"y": 1245
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1950,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1976,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 2002,
"y": 1245
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1976,
"y": 1245
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 0,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 26,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 52,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 26,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.walk.left",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep",
"mirrored"
],
"source": "art/animals/sheep/walk_left.yaml",
"generator": "mirror",
"variants": {
"(base)": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 78,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 104,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 130,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 104,
"y": 1266
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 156,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 182,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 208,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 182,
"y": 1266
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 234,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 260,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 286,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 260,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.walk.right",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/walk_right.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 312,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 338,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 364,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 338,
"y": 1266
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 390,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 416,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 442,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 416,
"y": 1266
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 468,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 494,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 520,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 494,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "ani.sheep.walk.up",
"kind": "object",
"w": 25,
"h": 20,
"tags": [
"animal",
"sheep"
],
"source": "art/animals/sheep/walk_up.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 546,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 572,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 598,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 572,
"y": 1266
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 624,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 650,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 676,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 650,
"y": 1266
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 702,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 728,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 754,
"y": 1266
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 728,
"y": 1266
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
},
{
"name": "fish",
"assets": [
{
"id": "fish.cod.l",
"kind": "object",
"w": 112,
"h": 36,
"tags": [
"fish",
"cod",
"catch"
],
"source": "art/fish/cod_l.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 112,
"h": 36,
"sheet": 0,
"x": 1155,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T09:59:50",
"note": "before cod head rework",
"w": 112,
"h": 36,
"sheet": 0,
"x": 1268,
"y": 838
}
],
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"request": "AD: the face is too rounded; match the NOAA cod (art/reference/_web/cod)",
"before_version": 1,
"fixed": [
"pectoral fin drawn as a lit paddle, not a crease",
"flank-to-belly banding broken up; belly rim added",
"speckle field ragged and densest on the upper flank",
"eyes on s/m clear of the outline; iris paint-ochre-5 on all sizes"
]
}
},
{
"id": "fish.cod.m",
"kind": "object",
"w": 84,
"h": 28,
"tags": [
"fish",
"cod",
"catch"
],
"source": "art/fish/cod_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 84,
"h": 28,
"sheet": 0,
"x": 0,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T09:59:49",
"note": "before cod head rework",
"w": 84,
"h": 28,
"sheet": 0,
"x": 85,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"request": "AD: the face is too rounded; match the NOAA cod (art/reference/_web/cod)",
"before_version": 1,
"fixed": [
"pectoral fin drawn as a lit paddle, not a crease",
"flank-to-belly banding broken up; belly rim added",
"speckle field ragged and densest on the upper flank",
"eyes on s/m clear of the outline; iris paint-ochre-5 on all sizes"
]
}
},
{
"id": "fish.cod.s",
"kind": "object",
"w": 60,
"h": 22,
"tags": [
"fish",
"cod",
"catch"
],
"source": "art/fish/cod_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 60,
"h": 22,
"sheet": 0,
"x": 1480,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T09:59:47",
"note": "before cod head rework",
"w": 60,
"h": 22,
"sheet": 0,
"x": 1541,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 3,
"critics": "panel",
"date": "2026-10-30",
"request": "AD: the face is too rounded; match the NOAA cod (art/reference/_web/cod)",
"before_version": 1,
"fixed": [
"pectoral fin drawn as a lit paddle, not a crease",
"flank-to-belly banding broken up; belly rim added",
"speckle field ragged and densest on the upper flank",
"eyes on s/m clear of the outline; iris paint-ochre-5 on all sizes"
]
}
},
{
"id": "fish.flounder.l",
"kind": "object",
"w": 72,
"h": 39,
"tags": [
"fish",
"flounder",
"catch"
],
"source": "art/fish/flounder_l.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 72,
"h": 39,
"sheet": 0,
"x": 1082,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.flounder.m",
"kind": "object",
"w": 56,
"h": 31,
"tags": [
"fish",
"flounder",
"catch"
],
"source": "art/fish/flounder_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 56,
"h": 31,
"sheet": 0,
"x": 1731,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.flounder.s",
"kind": "object",
"w": 40,
"h": 23,
"tags": [
"fish",
"flounder",
"catch"
],
"source": "art/fish/flounder_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 40,
"h": 23,
"sheet": 0,
"x": 1398,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:44:04",
"note": "before critic",
"w": 40,
"h": 23,
"sheet": 0,
"x": 1439,
"y": 1216
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the two eyes (rows 10-11 at x3-4, rows 12-13 at x4-5) touch diagonally and merge into one 3x4 blob at 1x, so the 'both eyes up' flatfish cue is lost; flounder.m and .l show two separate eyes"
],
"before_version": 1
}
},
{
"id": "fish.halibut.l",
"kind": "object",
"w": 144,
"h": 66,
"tags": [
"fish",
"halibut",
"catch"
],
"source": "art/fish/halibut_l.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 144,
"h": 66,
"sheet": 0,
"x": 1475,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.halibut.m",
"kind": "object",
"w": 120,
"h": 54,
"tags": [
"fish",
"halibut",
"catch"
],
"source": "art/fish/halibut_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 120,
"h": 54,
"sheet": 0,
"x": 1821,
"y": 722
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.halibut.s",
"kind": "object",
"w": 96,
"h": 44,
"tags": [
"fish",
"halibut",
"catch"
],
"source": "art/fish/halibut_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 96,
"h": 44,
"sheet": 0,
"x": 33,
"y": 838
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.mackerel.l",
"kind": "object",
"w": 70,
"h": 18,
"tags": [
"fish",
"mackerel",
"catch"
],
"source": "art/fish/mackerel_l.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 70,
"h": 18,
"sheet": 0,
"x": 787,
"y": 1266
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:44:01",
"note": "before critic",
"w": 70,
"h": 18,
"sheet": 0,
"x": 858,
"y": 1266
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the tiger stripes are 1-2 px dashes of the outline colour scattered over a dark teal back; at 1x on the card they read as speckle, so mackerel's signature pattern is missing (it is identified only by being the blue fish)"
],
"before_version": 1
}
},
{
"id": "fish.mackerel.m",
"kind": "object",
"w": 58,
"h": 15,
"tags": [
"fish",
"mackerel",
"catch"
],
"source": "art/fish/mackerel_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 58,
"h": 15,
"sheet": 0,
"x": 1005,
"y": 1323
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:44:02",
"note": "before critic",
"w": 58,
"h": 15,
"sheet": 0,
"x": 1064,
"y": 1323
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the tiger stripes are 1-2 px dashes of the outline colour scattered over a dark teal back; at 1x on the card they read as speckle, so mackerel's signature pattern is missing (it is identified only by being the blue fish)"
],
"before_version": 1
}
},
{
"id": "fish.mackerel.s",
"kind": "object",
"w": 46,
"h": 13,
"tags": [
"fish",
"mackerel",
"catch"
],
"source": "art/fish/mackerel_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 46,
"h": 13,
"sheet": 0,
"x": 867,
"y": 1340
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"history": [
{
"v": 1,
"date": "2026-10-30T00:44:03",
"note": "before critic",
"w": 46,
"h": 13,
"sheet": 0,
"x": 914,
"y": 1340
}
],
"critic": {
"verdict": "pass",
"rounds": 2,
"critics": "backfill",
"date": "2026-10-30",
"fixed": [
"the tiger stripes are 1-2 px dashes of the outline colour scattered over a dark teal back; at 1x on the card they read as speckle, so mackerel's signature pattern is missing (it is identified only by being the blue fish)"
],
"before_version": 1
}
},
{
"id": "fish.pollock.l",
"kind": "object",
"w": 104,
"h": 30,
"tags": [
"fish",
"pollock",
"catch"
],
"source": "art/fish/pollock_l.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 104,
"h": 30,
"sheet": 0,
"x": 1829,
"y": 1152
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.pollock.m",
"kind": "object",
"w": 80,
"h": 25,
"tags": [
"fish",
"pollock",
"catch"
],
"source": "art/fish/pollock_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 80,
"h": 25,
"sheet": 0,
"x": 1065,
"y": 1216
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.pollock.s",
"kind": "object",
"w": 56,
"h": 18,
"tags": [
"fish",
"pollock",
"catch"
],
"source": "art/fish/pollock_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 56,
"h": 18,
"sheet": 0,
"x": 929,
"y": 1266
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.sculpin.l",
"kind": "object",
"w": 64,
"h": 31,
"tags": [
"fish",
"sculpin",
"catch"
],
"source": "art/fish/sculpin_l.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 64,
"h": 31,
"sheet": 0,
"x": 1666,
"y": 1152
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.sculpin.m",
"kind": "object",
"w": 48,
"h": 24,
"tags": [
"fish",
"sculpin",
"catch"
],
"source": "art/fish/sculpin_m.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 48,
"h": 24,
"sheet": 0,
"x": 1306,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
},
{
"id": "fish.sculpin.s",
"kind": "object",
"w": 36,
"h": 20,
"tags": [
"fish",
"sculpin",
"catch"
],
"source": "art/fish/sculpin_s.yaml",
"generator": null,
"variants": {
"(base)": [
{
"ms": 0,
"w": 36,
"h": 20,
"sheet": 0,
"x": 1993,
"y": 1216
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": "",
"critic": {
"verdict": "pass",
"rounds": 1,
"critics": "backfill",
"date": "2026-10-30"
}
}
]
}
],
"lint_totals": {
"errors": 0,
"warnings": 0
}
};
