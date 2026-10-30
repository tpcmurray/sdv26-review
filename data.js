window.REVIEW = {
"sheets": [
{
"src": "img/sheet_0.png",
"w": 2047,
"h": 770
}
],
"built": "2026-10-30T10:53",
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
"x": 816,
"y": 726
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
"x": 833,
"y": 726
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
"x": 1307,
"y": 709
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
"x": 1307,
"y": 709
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
"x": 850,
"y": 726
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
"x": 867,
"y": 726
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
"x": 884,
"y": 726
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
"x": 901,
"y": 726
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
"x": 918,
"y": 726
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
"x": 918,
"y": 726
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
"x": 935,
"y": 726
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
"x": 952,
"y": 726
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
"x": 969,
"y": 726
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
"x": 986,
"y": 726
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
"x": 1003,
"y": 726
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
"x": 1020,
"y": 726
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
"x": 1037,
"y": 726
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
"x": 102,
"y": 726
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
"x": 1054,
"y": 726
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
"x": 1071,
"y": 726
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
"x": 1088,
"y": 726
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
"x": 1105,
"y": 726
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
"x": 1122,
"y": 726
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
"x": 1139,
"y": 726
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
"x": 1156,
"y": 726
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
"x": 1173,
"y": 726
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
"x": 1190,
"y": 726
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
"x": 1190,
"y": 726
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
"x": 1207,
"y": 726
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
"x": 1224,
"y": 726
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
"x": 1241,
"y": 726
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
"x": 1258,
"y": 726
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
"x": 1275,
"y": 726
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
"x": 1377,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1394,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1411,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1428,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1445,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1462,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1479,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1496,
"y": 726
}
],
"calm": [
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1394,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1411,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1428,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1445,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1462,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1479,
"y": 726
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1496,
"y": 726
}
],
"breeze": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1513,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1530,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1547,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1564,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1581,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1598,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1615,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1632,
"y": 726
}
],
"swell": [
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1649,
"y": 726
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1666,
"y": 726
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1683,
"y": 726
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1700,
"y": 726
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1717,
"y": 726
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1734,
"y": 726
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1751,
"y": 726
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1768,
"y": 726
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
"x": 899,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 916,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 933,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 950,
"y": 709
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 899,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 916,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 933,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 950,
"y": 709
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 967,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 984,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1001,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1018,
"y": 709
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1035,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1052,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1069,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1086,
"y": 709
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
"x": 1103,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1120,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1137,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1154,
"y": 709
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1103,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1120,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1137,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1154,
"y": 709
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1171,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1188,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1205,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1222,
"y": 709
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1239,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1256,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1273,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1290,
"y": 709
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
"x": 1307,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1307,
"y": 709
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
"x": 1324,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1341,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1358,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1375,
"y": 709
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1324,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1341,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1358,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1375,
"y": 709
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1392,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1409,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1426,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1443,
"y": 709
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1460,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1477,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1494,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1511,
"y": 709
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
"x": 1528,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1545,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1562,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1579,
"y": 709
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1528,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1545,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1562,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1579,
"y": 709
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1596,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1613,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1630,
"y": 709
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1647,
"y": 709
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1664,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1681,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1698,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1715,
"y": 709
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
"x": 1732,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1749,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1766,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1783,
"y": 709
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1732,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1749,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1766,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1783,
"y": 709
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1800,
"y": 709
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1817,
"y": 709
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1834,
"y": 709
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1851,
"y": 709
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1868,
"y": 709
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1885,
"y": 709
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1902,
"y": 709
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1851,
"y": 709
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
"x": 1919,
"y": 709
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
"x": 1936,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1953,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1970,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1987,
"y": 709
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1936,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1953,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1970,
"y": 709
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1987,
"y": 709
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 2004,
"y": 709
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 2021,
"y": 709
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 0,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 17,
"y": 726
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 34,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 51,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 68,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 85,
"y": 726
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
"x": 102,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 726
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
"x": 119,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 726
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
"x": 136,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 726
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
"x": 153,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 726
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
"x": 170,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 187,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 204,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 221,
"y": 726
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 170,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 187,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 204,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 221,
"y": 726
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 238,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 255,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 272,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 289,
"y": 726
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 306,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 323,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 340,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 357,
"y": 726
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
"x": 374,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 408,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 425,
"y": 726
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 374,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 408,
"y": 726
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 425,
"y": 726
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 442,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 459,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 476,
"y": 726
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 726
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 510,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 527,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 544,
"y": 726
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 561,
"y": 726
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
"x": 1533,
"y": 743
},
{
"ms": 150,
"w": 11,
"h": 14,
"sheet": 0,
"x": 1545,
"y": 743
},
{
"ms": 150,
"w": 11,
"h": 14,
"sheet": 0,
"x": 1557,
"y": 743
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
"x": 1569,
"y": 743
},
{
"ms": 450,
"w": 11,
"h": 14,
"sheet": 0,
"x": 1581,
"y": 743
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
"x": 1593,
"y": 743
},
{
"ms": 300,
"w": 11,
"h": 14,
"sheet": 0,
"x": 1605,
"y": 743
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
"x": 1617,
"y": 743
},
{
"ms": 70,
"w": 11,
"h": 14,
"sheet": 0,
"x": 1629,
"y": 743
},
{
"ms": 140,
"w": 11,
"h": 14,
"sheet": 0,
"x": 1641,
"y": 743
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
"x": 1884,
"y": 743
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1911,
"y": 743
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1938,
"y": 743
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1965,
"y": 743
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 1992,
"y": 743
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 2019,
"y": 743
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 0,
"y": 758
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 27,
"y": 758
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
"x": 54,
"y": 758
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
"x": 1030,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1079,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1128,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1177,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1226,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1275,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1324,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1373,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1422,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1471,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1520,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1569,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1618,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1667,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1716,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1765,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1814,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1863,
"y": 201
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
"x": 1707,
"y": 690
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1748,
"y": 690
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1789,
"y": 690
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1830,
"y": 690
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1871,
"y": 690
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1912,
"y": 690
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1953,
"y": 690
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1994,
"y": 690
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
"x": 226,
"y": 279
},
{
"ms": 160,
"w": 84,
"h": 36,
"sheet": 0,
"x": 311,
"y": 279
},
{
"ms": 110,
"w": 84,
"h": 36,
"sheet": 0,
"x": 396,
"y": 279
},
{
"ms": 110,
"w": 84,
"h": 36,
"sheet": 0,
"x": 481,
"y": 279
},
{
"ms": 140,
"w": 84,
"h": 36,
"sheet": 0,
"x": 566,
"y": 279
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 651,
"y": 279
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 736,
"y": 279
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 821,
"y": 279
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 906,
"y": 279
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 991,
"y": 279
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1076,
"y": 279
},
{
"ms": 380,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1161,
"y": 279
},
{
"ms": 240,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1246,
"y": 279
},
{
"ms": 450,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1331,
"y": 279
},
{
"ms": 500,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1416,
"y": 279
},
{
"ms": 400,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1501,
"y": 279
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
"x": 252,
"y": 758
},
{
"ms": 90,
"w": 8,
"h": 8,
"sheet": 0,
"x": 261,
"y": 758
},
{
"ms": 110,
"w": 8,
"h": 8,
"sheet": 0,
"x": 270,
"y": 758
},
{
"ms": 140,
"w": 8,
"h": 8,
"sheet": 0,
"x": 279,
"y": 758
},
{
"ms": 1400,
"w": 8,
"h": 8,
"sheet": 0,
"x": 288,
"y": 758
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
"x": 252,
"y": 758
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
"x": 391,
"y": 643
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 419,
"y": 643
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 447,
"y": 643
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 475,
"y": 643
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
"x": 1777,
"y": 743
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 1800,
"y": 743
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 1823,
"y": 743
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 1846,
"y": 743
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
"x": 503,
"y": 643
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 521,
"y": 643
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 539,
"y": 643
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 557,
"y": 643
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
"x": 396,
"y": 758
},
{
"ms": 140,
"w": 7,
"h": 4,
"sheet": 0,
"x": 404,
"y": 758
},
{
"ms": 220,
"w": 7,
"h": 4,
"sheet": 0,
"x": 412,
"y": 758
},
{
"ms": 200,
"w": 7,
"h": 4,
"sheet": 0,
"x": 420,
"y": 758
},
{
"ms": 260,
"w": 7,
"h": 4,
"sheet": 0,
"x": 428,
"y": 758
},
{
"ms": 900,
"w": 7,
"h": 4,
"sheet": 0,
"x": 436,
"y": 758
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
"x": 396,
"y": 758
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
"x": 181,
"y": 758
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
"x": 710,
"y": 580
},
{
"ms": 260,
"w": 56,
"h": 30,
"sheet": 0,
"x": 767,
"y": 580
},
{
"ms": 420,
"w": 56,
"h": 30,
"sheet": 0,
"x": 824,
"y": 580
},
{
"ms": 260,
"w": 56,
"h": 30,
"sheet": 0,
"x": 767,
"y": 580
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
"x": 782,
"y": 726
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
"x": 1812,
"y": 726
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
"x": 119,
"y": 758
}
],
"full": [
{
"ms": 0,
"w": 16,
"h": 10,
"sheet": 0,
"x": 136,
"y": 758
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
"x": 1967,
"y": 613
}
],
"empty": [
{
"ms": 0,
"w": 64,
"h": 25,
"sheet": 0,
"x": 0,
"y": 643
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
"x": 1967,
"y": 613
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
"x": 690,
"y": 643
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
"x": 708,
"y": 643
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
"x": 1612,
"y": 690
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
"x": 1627,
"y": 690
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
"x": 467,
"y": 201
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
"x": 488,
"y": 201
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
"x": 509,
"y": 201
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
"x": 530,
"y": 201
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
"x": 551,
"y": 201
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
"x": 572,
"y": 201
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
"x": 593,
"y": 201
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
"x": 614,
"y": 201
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
"x": 1016,
"y": 201
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
"x": 853,
"y": 201
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
"x": 321,
"y": 758
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
"x": 96,
"y": 758
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
"x": 581,
"y": 580
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
"x": 677,
"y": 643
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
"x": 82,
"y": 643
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
"x": 756,
"y": 643
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
"x": 769,
"y": 643
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
"x": 593,
"y": 580
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
"x": 106,
"y": 709
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
"x": 127,
"y": 709
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
"x": 148,
"y": 709
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
"x": 169,
"y": 709
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
"x": 190,
"y": 709
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
"x": 211,
"y": 709
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
"x": 505,
"y": 613
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
"x": 564,
"y": 580
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
"x": 0,
"y": 709
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
"x": 1969,
"y": 279
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
"x": 267,
"y": 201
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
"x": 1312,
"y": 613
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
"x": 1374,
"y": 613
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
"x": 568,
"y": 613
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
"x": 926,
"y": 580
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
"x": 961,
"y": 580
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
"x": 1774,
"y": 613
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
"x": 168,
"y": 758
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
"x": 881,
"y": 580
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
"x": 756,
"y": 201
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
"x": 1799,
"y": 726
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
"x": 783,
"y": 201
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
"x": 818,
"y": 201
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
"x": 1869,
"y": 743
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
"x": 1912,
"y": 201
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
"x": 434,
"y": 201
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
"x": 389,
"y": 758
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
"x": 1795,
"y": 613
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
"x": 1808,
"y": 613
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
"x": 1821,
"y": 613
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
"x": 1834,
"y": 613
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
"x": 1847,
"y": 613
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
"x": 1860,
"y": 613
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
"x": 1873,
"y": 613
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
"x": 1939,
"y": 279
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
"x": 1954,
"y": 279
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
"x": 65,
"y": 643
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
"x": 1411,
"y": 613
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
"x": 1115,
"y": 0
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
"x": 242,
"y": 0
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
"x": 1716,
"y": 279
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
"x": 726,
"y": 643
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
"x": 741,
"y": 643
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
"x": 232,
"y": 709
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
"x": 1808,
"y": 279
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
"x": 1857,
"y": 279
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
"x": 1898,
"y": 279
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
"x": 603,
"y": 613
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
"x": 1259,
"y": 613
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
"x": 991,
"y": 613
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
"x": 720,
"y": 613
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
"x": 996,
"y": 580
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
"x": 1017,
"y": 580
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
"x": 983,
"y": 201
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
"x": 1785,
"y": 726
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
"x": 1382,
"y": 0
}
],
"restored": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1463,
"y": 0
}
],
"restored_white": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1544,
"y": 0
}
],
"restored_ochre": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1625,
"y": 0
}
],
"restored_blue": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1706,
"y": 0
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
"x": 1787,
"y": 0
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
"x": 153,
"y": 758
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
"x": 1584,
"y": 690
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
"x": 1038,
"y": 580
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1139,
"y": 580
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1038,
"y": 580
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1139,
"y": 580
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1038,
"y": 580
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1139,
"y": 580
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1240,
"y": 580
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1038,
"y": 580
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1240,
"y": 580
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1341,
"y": 580
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1240,
"y": 580
}
],
"weathered": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1442,
"y": 580
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1543,
"y": 580
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
"x": 1064,
"y": 613
},
{
"v": 2,
"date": "2026-10-29T21:52:02",
"note": "64 px punt (A3), before the 4-seat lengthening",
"w": 64,
"h": 28,
"sheet": 0,
"x": 1064,
"y": 613
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
"x": 1644,
"y": 580
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1745,
"y": 580
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1644,
"y": 580
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1745,
"y": 580
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1644,
"y": 580
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1745,
"y": 580
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1846,
"y": 580
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1644,
"y": 580
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1846,
"y": 580
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1947,
"y": 580
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1846,
"y": 580
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
"x": 1129,
"y": 613
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
"x": 284,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 318,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 284,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 318,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 284,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 318,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 352,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 284,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 352,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 386,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 352,
"y": 0
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
"x": 420,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 454,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 420,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 454,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 420,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 454,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 488,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 420,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 522,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 556,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 522,
"y": 0
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
"x": 0,
"y": 613
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 101,
"y": 613
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 0,
"y": 613
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 101,
"y": 613
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 0,
"y": 613
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 101,
"y": 613
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 202,
"y": 613
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 0,
"y": 613
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 303,
"y": 613
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 404,
"y": 613
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 303,
"y": 613
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
"x": 1194,
"y": 613
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
"x": 809,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 843,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 809,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 843,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 809,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 843,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 877,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 809,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 877,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 911,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 877,
"y": 0
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
"x": 945,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 979,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 945,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 979,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 945,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 979,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1013,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 945,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1047,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1081,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 1047,
"y": 0
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
"x": 297,
"y": 758
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
"x": 444,
"y": 758
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
"x": 310,
"y": 758
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
"x": 129,
"y": 201
}
],
"restored": [
{
"ms": 0,
"w": 68,
"h": 68,
"sheet": 0,
"x": 198,
"y": 201
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
"x": 129,
"y": 201
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
"x": 1586,
"y": 279
}
],
"empty": [
{
"ms": 0,
"w": 64,
"h": 36,
"sheet": 0,
"x": 1651,
"y": 279
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
"x": 1586,
"y": 279
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
"x": 1767,
"y": 279
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
"x": 1767,
"y": 279
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
"x": 1349,
"y": 613
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
"x": 1349,
"y": 613
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
"x": 799,
"y": 726
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
"x": 799,
"y": 726
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
"x": 1586,
"y": 669
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
"x": 1586,
"y": 669
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
"x": 1939,
"y": 726
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
"x": 848,
"y": 709
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
"x": 848,
"y": 709
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
"x": 865,
"y": 709
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
"x": 865,
"y": 709
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
"x": 882,
"y": 709
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
"x": 882,
"y": 709
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
"x": 578,
"y": 726
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
"x": 578,
"y": 726
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
"x": 595,
"y": 726
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
"x": 612,
"y": 726
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
"x": 629,
"y": 726
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
"x": 646,
"y": 726
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
"x": 663,
"y": 726
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
"x": 680,
"y": 726
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
"x": 697,
"y": 726
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
"x": 714,
"y": 726
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
"x": 1675,
"y": 743
},
{
"ms": 300,
"w": 3,
"h": 14,
"sheet": 0,
"x": 1679,
"y": 743
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
"x": 731,
"y": 726
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
"x": 731,
"y": 726
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
"x": 1653,
"y": 743
},
{
"ms": 300,
"w": 10,
"h": 14,
"sheet": 0,
"x": 1664,
"y": 743
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
"x": 452,
"y": 758
},
{
"ms": 110,
"w": 3,
"h": 4,
"sheet": 0,
"x": 456,
"y": 758
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
"x": 748,
"y": 726
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
"x": 748,
"y": 726
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
"x": 765,
"y": 726
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
"x": 765,
"y": 726
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
"x": 31,
"y": 709
}
],
"hover": [
{
"ms": 0,
"w": 24,
"h": 16,
"sheet": 0,
"x": 56,
"y": 709
}
],
"pressed": [
{
"ms": 0,
"w": 24,
"h": 16,
"sheet": 0,
"x": 81,
"y": 709
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
"x": 1157,
"y": 0
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
"x": 169,
"y": 643
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
"x": 1868,
"y": 0
}
],
"plain": [
{
"ms": 0,
"w": 128,
"h": 77,
"sheet": 0,
"x": 0,
"y": 201
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
"x": 1964,
"y": 726
}
],
"selected": [
{
"ms": 0,
"w": 32,
"h": 14,
"sheet": 0,
"x": 1997,
"y": 726
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
"x": 460,
"y": 758
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
"x": 192,
"y": 758
}
],
"searching": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 202,
"y": 758
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
"x": 81,
"y": 758
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
"x": 1343,
"y": 726
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
"x": 212,
"y": 758
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
"x": 222,
"y": 758
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
"x": 232,
"y": 758
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
"x": 242,
"y": 758
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
"x": 329,
"y": 758
}
],
"n0": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 341,
"y": 758
}
],
"n1": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 353,
"y": 758
}
],
"n2": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 365,
"y": 758
}
],
"n3": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 377,
"y": 758
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
"x": 1360,
"y": 726
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
"x": 144,
"y": 643
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
"x": 1642,
"y": 690
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
"x": 1642,
"y": 690
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
"x": 590,
"y": 0
}
],
"no_signal": [
{
"ms": 0,
"w": 72,
"h": 120,
"sheet": 0,
"x": 663,
"y": 0
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
"x": 736,
"y": 0
},
{
"v": 2,
"date": "2026-10-30T00:44:06",
"note": "before critic",
"w": 72,
"h": 120,
"sheet": 0,
"x": 736,
"y": 0
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
"x": 0,
"y": 0
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
"x": 121,
"y": 0
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
"x": 0,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 316
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 316
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
"x": 153,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 316
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 316
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
"x": 306,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 316
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 316
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
"x": 459,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 316
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 316
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
"x": 561,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 316
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 316
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
"x": 663,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 316
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 316
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
"x": 765,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 316
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 316
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
"x": 867,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 316
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 316
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 316
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
"x": 969,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 316
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 316
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 316
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
"x": 1122,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 316
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 316
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 316
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
"x": 1275,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 316
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 316
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 316
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
"x": 1428,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 316
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 316
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 316
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
"x": 1530,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 316
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 316
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 316
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
"x": 1632,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 316
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 316
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 316
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
"x": 1734,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 316
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 316
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 316
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
"x": 1836,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 316
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 316
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 316
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
"x": 1938,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 316
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 316
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 316
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 316
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
"x": 0,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 349
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 349
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
"x": 102,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 349
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 349
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
"x": 204,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 349
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 349
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
"x": 272,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 316
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 316
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 316
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 316
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 316
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 316
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
"x": 374,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 349
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 349
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 349
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 349
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
"x": 476,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 349
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 349
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 349
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 349
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
"x": 204,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 349
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 349
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
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
"x": 646,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 316
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 316
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 316
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
"x": 714,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 349
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 349
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
"x": 782,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 349
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 349
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
"x": 850,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 349
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 349
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
"x": 918,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 349
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 349
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 349
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
"x": 918,
"y": 349
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
"x": 1071,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 349
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 349
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 349
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
"x": 1224,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 349
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 349
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 349
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
"x": 1377,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 349
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 349
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 349
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 349
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 349
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
"x": 1479,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 349
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 349
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 349
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
"x": 1683,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 349
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 349
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 349
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
"x": 1887,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 349
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 349
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 349
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 349
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 349
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 382
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 382
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 382
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
"x": 1887,
"y": 349
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
"x": 51,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 382
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 382
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 382
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 382
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 382
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 382
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 382
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 382
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 382
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
"x": 255,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 349
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 349
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 349
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
"x": 255,
"y": 382
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
"x": 357,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 349
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 349
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 349
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
"x": 459,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 349
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 349
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 349
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
"x": 459,
"y": 382
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
"x": 561,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 349
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 349
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 349
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 382
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 349
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
"x": 663,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 382
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 382
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 382
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 382
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 382
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
"x": 1003,
"y": 382
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
"x": 1020,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 382
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 382
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 382
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 382
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 382
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
"x": 1360,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 382
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 382
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 382
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 382
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 382
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
"x": 1700,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 382
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 382
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 382
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 382
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 382
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 382
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 382
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 382
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
"x": 0,
"y": 415
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
"x": 17,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 415
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 415
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 415
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 415
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 415
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
"x": 357,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 415
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 415
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 415
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 415
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 415
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
"x": 697,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 415
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 415
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 415
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 415
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 415
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
"x": 1037,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 415
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 415
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 415
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 415
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 415
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 415
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
"x": 1190,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 415
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 415
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 415
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 415
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 415
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
"x": 1445,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 415
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 415
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 415
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 415
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 415
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
"x": 1700,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 415
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 415
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 415
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 415
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 415
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
"x": 1955,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 415
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 415
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 415
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 415
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 415
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 448
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 448
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 448
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 448
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 448
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 448
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 448
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
"x": 85,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 448
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 448
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 448
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 448
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 448
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
"x": 340,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 448
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 448
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 448
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 448
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 448
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
"x": 595,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 448
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 448
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 448
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 448
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 448
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
"x": 850,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 448
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 448
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 448
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 448
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 448
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 448
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 448
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
"x": 1020,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 448
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 448
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 448
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 448
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 448
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
"x": 1190,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 448
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 448
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 448
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 448
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 448
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
"x": 1360,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 448
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 448
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 448
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 448
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 448
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
"x": 1530,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 448
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 448
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 448
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 448
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 448
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 448
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
"x": 1700,
"y": 448
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 448
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 448
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 448
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 448
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 448
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 448
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 448
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 448
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 448
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 448
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 448
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 448
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 448
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 448
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 448
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 448
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 448
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 448
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 448
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
"x": 0,
"y": 481
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
"x": 17,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 481
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 481
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 481
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 481
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 481
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
"x": 357,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 481
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 481
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 481
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 481
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 481
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
"x": 697,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 481
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 481
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 481
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 481
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 481
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 481
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 481
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 481
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
"x": 1037,
"y": 481
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
"x": 1054,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 481
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 481
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 481
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 481
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 481
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
"x": 1394,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 481
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 481
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 481
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 481
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 481
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
"x": 1734,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 481
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 481
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 481
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 481
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 481
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 514
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
"x": 34,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 514
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 514
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 514
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 514
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 514
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 514
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
"x": 289,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 514
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 514
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 514
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 514
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
"x": 544,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 514
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 514
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 514
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 514
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
"x": 799,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 514
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 514
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 514
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 514
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
"x": 1054,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 514
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 514
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 514
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 514
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 514
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 514
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
"x": 1224,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 514
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 514
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 514
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 514
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
"x": 1479,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 514
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 514
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 514
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 514
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
"x": 1734,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 514
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 514
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 514
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 514
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
"x": 1989,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 514
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 514
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 514
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 547
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 547
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 547
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 547
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
"x": 119,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 514
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 514
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 514
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 514
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 514
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
"x": 289,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 514
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 514
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 514
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 514
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 514
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
"x": 459,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 514
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 514
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 514
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 514
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 514
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
"x": 629,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 514
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 514
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 514
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 547
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 547
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 547
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
"x": 799,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 547
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 547
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 547
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
"x": 952,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 547
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 547
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 547
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
"x": 1105,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 547
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 547
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 547
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
"x": 1258,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 547
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 547
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 547
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 547
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 547
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
"x": 1360,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 547
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 547
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 547
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
"x": 1564,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 547
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 547
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 547
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
"x": 1768,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 547
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 547
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 547
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
"x": 1972,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 547
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 547
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 547
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 547
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 547
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 547
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 547
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 580
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 580
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 580
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 580
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 580
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 580
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 580
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
"x": 34,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 547
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 547
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 547
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
"x": 136,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 547
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 547
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 547
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
"x": 238,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 547
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 547
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 547
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
"x": 340,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 547
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 547
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 547
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 580
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 547
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
"x": 1292,
"y": 726
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
"x": 1292,
"y": 726
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
"x": 1309,
"y": 726
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
"x": 1309,
"y": 726
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
"x": 1326,
"y": 726
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
"x": 1326,
"y": 726
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
"x": 1792,
"y": 669
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1816,
"y": 669
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1792,
"y": 669
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1840,
"y": 669
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1864,
"y": 669
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1888,
"y": 669
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1864,
"y": 669
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1912,
"y": 669
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
"x": 1936,
"y": 669
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1960,
"y": 669
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1984,
"y": 669
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2008,
"y": 669
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 690
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 24,
"y": 690
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 690
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 72,
"y": 690
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
"x": 96,
"y": 690
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 690
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 144,
"y": 690
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 168,
"y": 690
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 192,
"y": 690
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 216,
"y": 690
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 240,
"y": 690
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 264,
"y": 690
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
"x": 288,
"y": 690
},
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 312,
"y": 690
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 288,
"y": 690
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 336,
"y": 690
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 360,
"y": 690
},
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 384,
"y": 690
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 360,
"y": 690
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 408,
"y": 690
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
"x": 1792,
"y": 669
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 432,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 432,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 456,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 480,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 456,
"y": 690
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1864,
"y": 669
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 504,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 504,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 528,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 552,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 528,
"y": 690
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
"x": 1936,
"y": 669
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 576,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 576,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 600,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 624,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 600,
"y": 690
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 690
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 648,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 648,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 672,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 696,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 672,
"y": 690
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
"x": 96,
"y": 690
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 720,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 720,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 744,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 768,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 744,
"y": 690
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 192,
"y": 690
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 792,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 792,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 816,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 840,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 816,
"y": 690
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
"x": 288,
"y": 690
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 864,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 864,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 888,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 864,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 912,
"y": 690
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 360,
"y": 690
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 936,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 936,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 960,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 936,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 984,
"y": 690
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
"x": 432,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 456,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 480,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 456,
"y": 690
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 504,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 528,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 552,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 528,
"y": 690
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
"x": 576,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 600,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 624,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 600,
"y": 690
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 648,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 672,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 696,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 672,
"y": 690
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
"x": 720,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 744,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 768,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 744,
"y": 690
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 792,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 816,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 840,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 816,
"y": 690
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
"x": 864,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 888,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 864,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 912,
"y": 690
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 936,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 960,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 936,
"y": 690
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 984,
"y": 690
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
"x": 1008,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1032,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1056,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1032,
"y": 690
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1080,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1104,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1128,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1104,
"y": 690
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
"x": 1152,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1176,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1200,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1176,
"y": 690
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1224,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1248,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1272,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1248,
"y": 690
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
"x": 1296,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1320,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1344,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1320,
"y": 690
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1368,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1392,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1416,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1392,
"y": 690
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
"x": 1440,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1464,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1488,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1464,
"y": 690
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1512,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1536,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1560,
"y": 690
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1536,
"y": 690
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
"x": 1438,
"y": 613
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1459,
"y": 613
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1480,
"y": 613
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1459,
"y": 613
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
"x": 1501,
"y": 613
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1522,
"y": 613
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1543,
"y": 613
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1564,
"y": 613
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1543,
"y": 613
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
"x": 1585,
"y": 613
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1606,
"y": 613
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1627,
"y": 613
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1648,
"y": 613
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1627,
"y": 613
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
"x": 1669,
"y": 613
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1690,
"y": 613
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1711,
"y": 613
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1690,
"y": 613
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
"x": 1543,
"y": 613
},
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1732,
"y": 613
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
"x": 1627,
"y": 613
},
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1753,
"y": 613
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
"x": 253,
"y": 709
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 270,
"y": 709
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 253,
"y": 709
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 287,
"y": 709
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 253,
"y": 709
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 270,
"y": 709
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
"x": 304,
"y": 709
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 321,
"y": 709
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 304,
"y": 709
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 338,
"y": 709
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 304,
"y": 709
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 321,
"y": 709
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
"x": 355,
"y": 709
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 372,
"y": 709
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 355,
"y": 709
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 389,
"y": 709
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 355,
"y": 709
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 372,
"y": 709
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
"x": 406,
"y": 709
},
{
"ms": 1000,
"w": 16,
"h": 16,
"sheet": 0,
"x": 423,
"y": 709
},
{
"ms": 1200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 406,
"y": 709
},
{
"ms": 600,
"w": 16,
"h": 16,
"sheet": 0,
"x": 423,
"y": 709
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
"x": 440,
"y": 709
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 457,
"y": 709
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 474,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 457,
"y": 709
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
"x": 491,
"y": 709
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 508,
"y": 709
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 525,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 508,
"y": 709
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
"x": 542,
"y": 709
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 559,
"y": 709
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 576,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 559,
"y": 709
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
"x": 593,
"y": 709
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 610,
"y": 709
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 627,
"y": 709
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 610,
"y": 709
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
"x": 644,
"y": 709
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 253,
"y": 709
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 661,
"y": 709
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 253,
"y": 709
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
"x": 678,
"y": 709
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 695,
"y": 709
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 712,
"y": 709
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 729,
"y": 709
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
"x": 746,
"y": 709
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 763,
"y": 709
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 780,
"y": 709
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 797,
"y": 709
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
"x": 814,
"y": 709
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 406,
"y": 709
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 831,
"y": 709
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 406,
"y": 709
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
"x": 2030,
"y": 726
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 0,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 2030,
"y": 726
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 16,
"y": 743
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 32,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 48,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 32,
"y": 743
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 64,
"y": 743
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
"x": 80,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 96,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 80,
"y": 743
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 112,
"y": 743
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 128,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 144,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 128,
"y": 743
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 160,
"y": 743
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
"x": 176,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 192,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 176,
"y": 743
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 208,
"y": 743
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 224,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 240,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 224,
"y": 743
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 256,
"y": 743
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
"x": 272,
"y": 743
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 288,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 272,
"y": 743
},
{
"ms": 220,
"w": 15,
"h": 14,
"sheet": 0,
"x": 304,
"y": 743
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 320,
"y": 743
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 336,
"y": 743
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 320,
"y": 743
},
{
"ms": 220,
"w": 15,
"h": 14,
"sheet": 0,
"x": 352,
"y": 743
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
"x": 2030,
"y": 726
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 368,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 384,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 368,
"y": 743
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 32,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 400,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 416,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 400,
"y": 743
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
"x": 2030,
"y": 726
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
"x": 80,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 432,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 448,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 432,
"y": 743
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 128,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 464,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 480,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 464,
"y": 743
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
"x": 176,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 496,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 512,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 496,
"y": 743
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 224,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 528,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 544,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 528,
"y": 743
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
"x": 272,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 560,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 576,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 560,
"y": 743
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 320,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 592,
"y": 743
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 608,
"y": 743
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 592,
"y": 743
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
"x": 272,
"y": 743
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
"x": 624,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 2030,
"y": 726
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 640,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 2030,
"y": 726
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 656,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 32,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 672,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 32,
"y": 743
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
"x": 688,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 704,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 720,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 736,
"y": 743
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 752,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 768,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 784,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 800,
"y": 743
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
"x": 816,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 832,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 848,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 864,
"y": 743
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 880,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 896,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 912,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 928,
"y": 743
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
"x": 944,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 272,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 960,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 272,
"y": 743
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 976,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 320,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 992,
"y": 743
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 320,
"y": 743
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
"x": 1008,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1023,
"y": 743
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1008,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1023,
"y": 743
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1008,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1038,
"y": 743
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
"x": 1053,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1068,
"y": 743
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1053,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1068,
"y": 743
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1053,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1083,
"y": 743
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
"x": 1098,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1113,
"y": 743
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1098,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1113,
"y": 743
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1098,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1128,
"y": 743
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
"x": 1143,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1158,
"y": 743
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1143,
"y": 743
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1158,
"y": 743
},
{
"ms": 800,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1143,
"y": 743
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
"x": 575,
"y": 643
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 592,
"y": 643
},
{
"ms": 80,
"w": 16,
"h": 22,
"sheet": 0,
"x": 609,
"y": 643
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 592,
"y": 643
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
"x": 626,
"y": 643
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 643,
"y": 643
},
{
"ms": 80,
"w": 16,
"h": 22,
"sheet": 0,
"x": 660,
"y": 643
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 643,
"y": 643
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
"x": 1173,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1188,
"y": 743
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1173,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1203,
"y": 743
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1173,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1203,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1188,
"y": 743
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
"x": 1218,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1233,
"y": 743
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1218,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1248,
"y": 743
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1218,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1248,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1233,
"y": 743
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
"x": 1263,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1278,
"y": 743
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1263,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1293,
"y": 743
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1263,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1293,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1278,
"y": 743
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
"x": 1308,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1323,
"y": 743
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1308,
"y": 743
},
{
"ms": 400,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1338,
"y": 743
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1308,
"y": 743
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1323,
"y": 743
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
"x": 1353,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1173,
"y": 743
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1368,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1173,
"y": 743
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
"x": 1383,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1398,
"y": 743
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1413,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1428,
"y": 743
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
"x": 1443,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1458,
"y": 743
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1473,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1488,
"y": 743
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
"x": 1503,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1308,
"y": 743
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1518,
"y": 743
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1308,
"y": 743
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
"x": 819,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 845,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 871,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 845,
"y": 643
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 897,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 923,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 949,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 923,
"y": 643
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 975,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1001,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1027,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1001,
"y": 643
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
"x": 1053,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1079,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1105,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1079,
"y": 643
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1131,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1157,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1183,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1157,
"y": 643
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1209,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1235,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1261,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1235,
"y": 643
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
"x": 1287,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1313,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1339,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1313,
"y": 643
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1365,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1391,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1417,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1391,
"y": 643
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1443,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1469,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1495,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1469,
"y": 643
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
"x": 1521,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1547,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1521,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1573,
"y": 643
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1599,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1625,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1599,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1651,
"y": 643
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1677,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1703,
"y": 643
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1677,
"y": 643
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1729,
"y": 643
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
"x": 1755,
"y": 643
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1781,
"y": 643
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1755,
"y": 643
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1807,
"y": 643
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1833,
"y": 643
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1859,
"y": 643
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1833,
"y": 643
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1885,
"y": 643
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1911,
"y": 643
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1937,
"y": 643
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1911,
"y": 643
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1963,
"y": 643
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
"x": 1989,
"y": 643
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 2015,
"y": 643
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1989,
"y": 643
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 0,
"y": 669
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 26,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 52,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 26,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 78,
"y": 669
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 104,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 130,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 104,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 156,
"y": 669
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
"x": 182,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 208,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 182,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 234,
"y": 669
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 260,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 286,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 260,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 312,
"y": 669
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 338,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 364,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 338,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 390,
"y": 669
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
"x": 416,
"y": 669
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 442,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 416,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 468,
"y": 669
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 494,
"y": 669
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 520,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 494,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 546,
"y": 669
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 572,
"y": 669
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 598,
"y": 669
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 572,
"y": 669
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 624,
"y": 669
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
"x": 650,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 676,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 702,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 676,
"y": 669
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 728,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 754,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 780,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 754,
"y": 669
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 806,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 832,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 858,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 832,
"y": 669
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
"x": 884,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 910,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 936,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 910,
"y": 669
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 962,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 988,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1014,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 988,
"y": 669
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1040,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1066,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1092,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1066,
"y": 669
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
"x": 1118,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1144,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1170,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1144,
"y": 669
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1196,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1222,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1248,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1222,
"y": 669
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1274,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1300,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1326,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1300,
"y": 669
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
"x": 1352,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1378,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1404,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1378,
"y": 669
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1430,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1456,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1482,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1456,
"y": 669
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1508,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1534,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1560,
"y": 669
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1534,
"y": 669
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
"x": 0,
"y": 279
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
"x": 113,
"y": 279
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
"x": 821,
"y": 613
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
"x": 906,
"y": 613
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
"x": 269,
"y": 643
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
"x": 330,
"y": 643
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
"x": 1935,
"y": 201
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
"x": 507,
"y": 580
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
"x": 187,
"y": 643
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
"x": 228,
"y": 643
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
"x": 289,
"y": 201
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
"x": 635,
"y": 201
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
"x": 886,
"y": 201
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
"x": 1593,
"y": 669
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
"x": 1664,
"y": 669
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
"x": 1821,
"y": 726
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
"x": 1880,
"y": 726
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
"x": 1683,
"y": 743
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
"x": 1730,
"y": 743
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
"x": 605,
"y": 580
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
"x": 1886,
"y": 613
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
"x": 1735,
"y": 669
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
"x": 442,
"y": 580
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
"x": 95,
"y": 643
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
"x": 782,
"y": 643
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
