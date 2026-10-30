window.REVIEW = {
"sheets": [
{
"src": "img/sheet_0.png",
"w": 2047,
"h": 743
}
],
"built": "2026-10-30T00:17",
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
},
"before": []
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
},
"before": []
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
},
"before": []
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
},
"before": []
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
},
"before": []
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
"x": 1836,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1853,
"y": 695
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
"x": 391,
"y": 695
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
"x": 391,
"y": 695
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
"x": 1870,
"y": 695
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
"x": 1887,
"y": 695
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
"x": 1904,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1921,
"y": 695
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
"x": 1938,
"y": 695
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
"x": 1938,
"y": 695
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
"x": 1955,
"y": 695
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
"x": 1972,
"y": 695
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
"x": 1989,
"y": 695
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
"x": 2006,
"y": 695
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
"x": 2023,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 0,
"y": 712
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
"x": 1207,
"y": 695
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
"x": 1207,
"y": 695
}
]
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
"x": 17,
"y": 712
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
"x": 34,
"y": 712
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
"x": 51,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 68,
"y": 712
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
"x": 85,
"y": 712
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
"x": 85,
"y": 712
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
"x": 102,
"y": 712
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
"x": 119,
"y": 712
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
"x": 136,
"y": 712
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
"x": 153,
"y": 712
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
"x": 170,
"y": 712
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
"x": 272,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 289,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 306,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 323,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 340,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 357,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 374,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 712
}
],
"calm": [
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 272,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 289,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 306,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 323,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 340,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 357,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 374,
"y": 712
},
{
"ms": 300,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 712
}
],
"breeze": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 408,
"y": 712
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 425,
"y": 712
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 442,
"y": 712
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 459,
"y": 712
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 476,
"y": 712
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 712
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 510,
"y": 712
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 527,
"y": 712
}
],
"swell": [
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 544,
"y": 712
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 561,
"y": 712
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 578,
"y": 712
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 595,
"y": 712
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 612,
"y": 712
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 629,
"y": 712
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 646,
"y": 712
},
{
"ms": 200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 663,
"y": 712
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
"x": 2031,
"y": 676
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 0,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 17,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 34,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 2031,
"y": 676
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 0,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 17,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 34,
"y": 695
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 51,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 68,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 85,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 102,
"y": 695
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 119,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 136,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 153,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 170,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 187,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 204,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 221,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 238,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 187,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 204,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 221,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 238,
"y": 695
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 255,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 272,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 289,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 306,
"y": 695
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 323,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 340,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 357,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 374,
"y": 695
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
"x": 391,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 391,
"y": 695
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
"x": 408,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 425,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 442,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 459,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 408,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 425,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 442,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 459,
"y": 695
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 476,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 493,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 510,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 527,
"y": 695
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 544,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 561,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 578,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 595,
"y": 695
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
"x": 612,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 629,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 646,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 663,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 612,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 629,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 646,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 663,
"y": 695
}
],
"breeze": [
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 680,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 697,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 714,
"y": 695
},
{
"ms": 240,
"w": 16,
"h": 16,
"sheet": 0,
"x": 731,
"y": 695
}
],
"swell": [
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 748,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 765,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 782,
"y": 695
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 799,
"y": 695
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
"x": 816,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 833,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 850,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 867,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 816,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 833,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 850,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 867,
"y": 695
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 884,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 901,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 918,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 935,
"y": 695
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 952,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 969,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 986,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 935,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1003,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1020,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1037,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1054,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1003,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1020,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1037,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1054,
"y": 695
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1071,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1088,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1105,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1122,
"y": 695
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1139,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1156,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1173,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1190,
"y": 695
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
"x": 1207,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1207,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
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
"x": 1224,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1241,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1258,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1275,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1224,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1241,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1258,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1275,
"y": 695
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1292,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1309,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1326,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1343,
"y": 695
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1360,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1377,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1394,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1411,
"y": 695
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
"x": 1428,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1445,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1462,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1479,
"y": 695
}
],
"calm": [
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1428,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1445,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1462,
"y": 695
},
{
"ms": 320,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1479,
"y": 695
}
],
"breeze": [
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1496,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1513,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1530,
"y": 695
},
{
"ms": 220,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1547,
"y": 695
}
],
"swell": [
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1564,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1581,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1598,
"y": 695
},
{
"ms": 170,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1615,
"y": 695
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
"x": 375,
"y": 729
},
{
"ms": 150,
"w": 11,
"h": 14,
"sheet": 0,
"x": 387,
"y": 729
},
{
"ms": 150,
"w": 11,
"h": 14,
"sheet": 0,
"x": 399,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 411,
"y": 729
},
{
"ms": 450,
"w": 11,
"h": 14,
"sheet": 0,
"x": 423,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 435,
"y": 729
},
{
"ms": 300,
"w": 11,
"h": 14,
"sheet": 0,
"x": 447,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 459,
"y": 729
},
{
"ms": 70,
"w": 11,
"h": 14,
"sheet": 0,
"x": 471,
"y": 729
},
{
"ms": 140,
"w": 11,
"h": 14,
"sheet": 0,
"x": 483,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 679,
"y": 729
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 706,
"y": 729
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 733,
"y": 729
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 760,
"y": 729
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 787,
"y": 729
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 814,
"y": 729
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 841,
"y": 729
},
{
"ms": 120,
"w": 26,
"h": 12,
"sheet": 0,
"x": 868,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 713,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 762,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 811,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 860,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 909,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 958,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1007,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1056,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1105,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1154,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1203,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1252,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1301,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1350,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1399,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1448,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1497,
"y": 201
},
{
"ms": 100,
"w": 48,
"h": 40,
"sheet": 0,
"x": 1546,
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
"x": 867,
"y": 676
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 908,
"y": 676
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 949,
"y": 676
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 990,
"y": 676
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1031,
"y": 676
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1072,
"y": 676
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1113,
"y": 676
},
{
"ms": 260,
"w": 40,
"h": 16,
"sheet": 0,
"x": 1154,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1804,
"y": 201
},
{
"ms": 160,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1889,
"y": 201
},
{
"ms": 110,
"w": 84,
"h": 36,
"sheet": 0,
"x": 0,
"y": 270
},
{
"ms": 110,
"w": 84,
"h": 36,
"sheet": 0,
"x": 85,
"y": 270
},
{
"ms": 140,
"w": 84,
"h": 36,
"sheet": 0,
"x": 170,
"y": 270
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 255,
"y": 270
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 340,
"y": 270
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 425,
"y": 270
},
{
"ms": 220,
"w": 84,
"h": 36,
"sheet": 0,
"x": 510,
"y": 270
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 595,
"y": 270
},
{
"ms": 200,
"w": 84,
"h": 36,
"sheet": 0,
"x": 680,
"y": 270
},
{
"ms": 380,
"w": 84,
"h": 36,
"sheet": 0,
"x": 765,
"y": 270
},
{
"ms": 240,
"w": 84,
"h": 36,
"sheet": 0,
"x": 850,
"y": 270
},
{
"ms": 450,
"w": 84,
"h": 36,
"sheet": 0,
"x": 935,
"y": 270
},
{
"ms": 500,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1020,
"y": 270
},
{
"ms": 400,
"w": 84,
"h": 36,
"sheet": 0,
"x": 1105,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1066,
"y": 729
},
{
"ms": 90,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1075,
"y": 729
},
{
"ms": 110,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1084,
"y": 729
},
{
"ms": 140,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1093,
"y": 729
},
{
"ms": 1400,
"w": 8,
"h": 8,
"sheet": 0,
"x": 1102,
"y": 729
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
"x": 1066,
"y": 729
}
]
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
"x": 1692,
"y": 603
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 1720,
"y": 603
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 1748,
"y": 603
},
{
"ms": 120,
"w": 27,
"h": 22,
"sheet": 0,
"x": 1776,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 572,
"y": 729
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 595,
"y": 729
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 618,
"y": 729
},
{
"ms": 120,
"w": 22,
"h": 13,
"sheet": 0,
"x": 641,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1804,
"y": 603
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 1822,
"y": 603
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 1840,
"y": 603
},
{
"ms": 120,
"w": 17,
"h": 22,
"sheet": 0,
"x": 1858,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1210,
"y": 729
},
{
"ms": 140,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1218,
"y": 729
},
{
"ms": 220,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1226,
"y": 729
},
{
"ms": 200,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1234,
"y": 729
},
{
"ms": 260,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1242,
"y": 729
},
{
"ms": 900,
"w": 7,
"h": 4,
"sheet": 0,
"x": 1250,
"y": 729
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
"x": 1210,
"y": 729
}
]
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
"x": 995,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 203,
"y": 571
},
{
"ms": 260,
"w": 56,
"h": 30,
"sheet": 0,
"x": 260,
"y": 571
},
{
"ms": 420,
"w": 56,
"h": 30,
"sheet": 0,
"x": 317,
"y": 571
},
{
"ms": 260,
"w": 56,
"h": 30,
"sheet": 0,
"x": 260,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1802,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 707,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 933,
"y": 729
}
],
"full": [
{
"ms": 0,
"w": 16,
"h": 10,
"sheet": 0,
"x": 950,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1338,
"y": 603
}
],
"empty": [
{
"ms": 0,
"w": 64,
"h": 25,
"sheet": 0,
"x": 1403,
"y": 603
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
"x": 1338,
"y": 603
}
]
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
"x": 1991,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 772,
"y": 676
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
"x": 787,
"y": 676
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
]
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
"x": 269,
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
"x": 290,
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
"x": 311,
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
"x": 332,
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
"x": 699,
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
"x": 536,
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
"x": 1135,
"y": 729
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
]
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
"x": 910,
"y": 729
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
]
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
"x": 74,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1978,
"y": 603
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
"x": 1485,
"y": 603
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
]
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
"x": 2024,
"y": 603
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
"x": 0,
"y": 633
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
]
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
"x": 86,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1301,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1322,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1343,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 0,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 57,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1195,
"y": 676
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
]
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
"x": 1517,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 69,
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
"x": 722,
"y": 603
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
"x": 784,
"y": 603
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
]
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
"x": 63,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 419,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1184,
"y": 603
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
]
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
"x": 982,
"y": 729
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
"date": "2026-10-30"
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
"x": 374,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 474,
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
"x": 694,
"y": 712
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
]
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
"x": 501,
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
"x": 664,
"y": 729
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
]
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
"x": 1595,
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
"date": "2026-10-30"
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
"x": 236,
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
"x": 1203,
"y": 729
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
]
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
"x": 1205,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1218,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1231,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1244,
"y": 603
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1502,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1468,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 821,
"y": 603
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
]
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
"x": 921,
"y": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 121,
"y": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1320,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 2009,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1364,
"y": 676
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
]
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
"x": 1412,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1461,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 98,
"y": 603
}
]
},
"draft": [
"wallpaper-blue"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 669,
"y": 603
}
]
},
"draft": [
"wallpaper"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 401,
"y": 603
}
]
},
"draft": [
"wallpaper-blue"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 215,
"y": 603
}
]
},
"draft": [
"wallpaper"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 454,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 666,
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
"x": 680,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1188,
"y": 0
}
],
"restored": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1269,
"y": 0
}
],
"restored_white": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1350,
"y": 0
}
],
"restored_ochre": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1431,
"y": 0
}
],
"restored_blue": [
{
"ms": 0,
"w": 80,
"h": 102,
"sheet": 0,
"x": 1512,
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
"x": 1593,
"y": 0
}
]
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
"x": 967,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 744,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 475,
"y": 571
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 576,
"y": 571
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 475,
"y": 571
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 576,
"y": 571
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 475,
"y": 571
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 576,
"y": 571
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 677,
"y": 571
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 475,
"y": 571
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 677,
"y": 571
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 778,
"y": 571
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 677,
"y": 571
}
],
"weathered": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 879,
"y": 571
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 980,
"y": 571
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
"x": 474,
"y": 603
},
{
"v": 2,
"date": "2026-10-29T21:52:02",
"note": "64 px punt (A3), before the 4-seat lengthening",
"w": 64,
"h": 28,
"sheet": 0,
"x": 474,
"y": 603
}
]
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
"x": 1081,
"y": 571
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1182,
"y": 571
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1081,
"y": 571
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1182,
"y": 571
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1081,
"y": 571
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1182,
"y": 571
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1283,
"y": 571
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1081,
"y": 571
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1283,
"y": 571
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1384,
"y": 571
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1283,
"y": 571
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
"x": 539,
"y": 603
}
]
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
"x": 163,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 197,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 163,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 197,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 163,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 197,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 231,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 163,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 231,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 265,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 231,
"y": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 299,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 333,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 299,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 125,
"sheet": 0,
"x": 333,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 299,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 333,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 125,
"sheet": 0,
"x": 367,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 299,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 401,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 125,
"sheet": 0,
"x": 435,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 125,
"sheet": 0,
"x": 401,
"y": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1485,
"y": 571
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1586,
"y": 571
}
],
"calm": [
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1485,
"y": 571
},
{
"ms": 900,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1586,
"y": 571
}
],
"breeze": [
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1485,
"y": 571
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1586,
"y": 571
},
{
"ms": 450,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1687,
"y": 571
}
],
"swell": [
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1485,
"y": 571
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1788,
"y": 571
},
{
"ms": 300,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1889,
"y": 571
},
{
"ms": 180,
"w": 100,
"h": 29,
"sheet": 0,
"x": 1788,
"y": 571
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
"x": 604,
"y": 603
}
]
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
"x": 615,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 649,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 615,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 649,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 615,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 649,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 683,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 615,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 683,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 717,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 683,
"y": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 751,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 785,
"y": 0
}
],
"calm": [
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 751,
"y": 0
},
{
"ms": 900,
"w": 33,
"h": 118,
"sheet": 0,
"x": 785,
"y": 0
}
],
"breeze": [
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 751,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 785,
"y": 0
},
{
"ms": 450,
"w": 33,
"h": 118,
"sheet": 0,
"x": 819,
"y": 0
}
],
"swell": [
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 751,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 853,
"y": 0
},
{
"ms": 300,
"w": 33,
"h": 118,
"sheet": 0,
"x": 887,
"y": 0
},
{
"ms": 180,
"w": 33,
"h": 118,
"sheet": 0,
"x": 853,
"y": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1111,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1258,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1124,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1932,
"y": 0
}
],
"restored": [
{
"ms": 0,
"w": 68,
"h": 68,
"sheet": 0,
"x": 0,
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
"x": 1932,
"y": 0
}
]
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
"x": 1190,
"y": 270
}
],
"empty": [
{
"ms": 0,
"w": 64,
"h": 36,
"sheet": 0,
"x": 1255,
"y": 270
}
]
},
"draft": [
"plastic-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1371,
"y": 270
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
"x": 1371,
"y": 270
}
]
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
"x": 759,
"y": 603
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
"x": 759,
"y": 603
}
]
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
"x": 1819,
"y": 695
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
"x": 1819,
"y": 695
}
]
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
"x": 832,
"y": 655
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
"x": 832,
"y": 655
}
]
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
"x": 775,
"y": 712
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
"x": 1980,
"y": 676
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
"x": 1980,
"y": 676
}
]
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
"x": 1997,
"y": 676
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
"x": 1997,
"y": 676
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
"x": 2014,
"y": 676
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
"x": 2014,
"y": 676
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
"x": 1632,
"y": 695
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
"x": 1632,
"y": 695
}
]
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
"x": 1649,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1666,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1683,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1700,
"y": 695
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1717,
"y": 695
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1734,
"y": 695
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 517,
"y": 729
},
{
"ms": 300,
"w": 3,
"h": 14,
"sheet": 0,
"x": 521,
"y": 729
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
"x": 1751,
"y": 695
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
"x": 1751,
"y": 695
}
]
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
"x": 495,
"y": 729
},
{
"ms": 300,
"w": 10,
"h": 14,
"sheet": 0,
"x": 506,
"y": 729
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
"x": 1266,
"y": 729
},
{
"ms": 110,
"w": 3,
"h": 4,
"sheet": 0,
"x": 1270,
"y": 729
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
"x": 1768,
"y": 695
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
"x": 1768,
"y": 695
}
]
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
"x": 1785,
"y": 695
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
"x": 1785,
"y": 695
}
]
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
"x": 1226,
"y": 676
}
],
"hover": [
{
"ms": 0,
"w": 24,
"h": 16,
"sheet": 0,
"x": 1251,
"y": 676
}
],
"pressed": [
{
"ms": 0,
"w": 24,
"h": 16,
"sheet": 0,
"x": 1276,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 963,
"y": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1572,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1674,
"y": 0
}
],
"plain": [
{
"ms": 0,
"w": 128,
"h": 77,
"sheet": 0,
"x": 1803,
"y": 0
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
"x": 800,
"y": 712
}
],
"selected": [
{
"ms": 0,
"w": 32,
"h": 14,
"sheet": 0,
"x": 833,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1274,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1006,
"y": 729
}
],
"searching": [
{
"ms": 0,
"w": 9,
"h": 9,
"sheet": 0,
"x": 1016,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 895,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 238,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1026,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1036,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1046,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1056,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1143,
"y": 729
}
],
"n0": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1155,
"y": 729
}
],
"n1": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1167,
"y": 729
}
],
"n2": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1179,
"y": 729
}
],
"n3": [
{
"ms": 0,
"w": 11,
"h": 5,
"sheet": 0,
"x": 1191,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 255,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1547,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 802,
"y": 676
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
"x": 802,
"y": 676
}
]
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
"x": 469,
"y": 0
}
],
"no_signal": [
{
"ms": 0,
"w": 72,
"h": 120,
"sheet": 0,
"x": 542,
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
"x": 469,
"y": 0
}
]
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
"notes": ""
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
"x": 1591,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1608,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1591,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1625,
"y": 270
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1642,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1659,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1642,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1676,
"y": 270
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1693,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1710,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1693,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1727,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1744,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1761,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1744,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1778,
"y": 270
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1795,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1812,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1795,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1829,
"y": 270
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1846,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1863,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1846,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1880,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1897,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1914,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1897,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1931,
"y": 270
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1948,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1965,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1948,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1982,
"y": 270
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1999,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2016,
"y": 270
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1999,
"y": 270
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 17,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 307
}
],
"blue_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 307
}
],
"red_cardigan": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 119,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1591,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1591,
"y": 270
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1642,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1642,
"y": 270
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1693,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1693,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 221,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1744,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1744,
"y": 270
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1795,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1795,
"y": 270
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1846,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1846,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 323,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1897,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1897,
"y": 270
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1948,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1948,
"y": 270
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1999,
"y": 270
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1999,
"y": 270
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 425,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 307
}
],
"blue_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 307
}
],
"red_cardigan": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 307
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
"x": 527,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 307
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 307
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 680,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 307
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 307
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 833,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 307
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 307
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 986,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 307
}
],
"sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 307
}
],
"red_sweater": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1088,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 307
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 307
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1190,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 307
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 307
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1292,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 307
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 307
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 307
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1394,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 307
}
],
"sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 307
}
],
"red_sweater": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 307
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
"x": 1496,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 307
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1598,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 307
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1700,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 307
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1802,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 307
}
],
"red_vest": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1870,
"y": 307
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 307
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 307
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 307
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 307
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 307
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 307
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1972,
"y": 307
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 307
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 307
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 307
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 307
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 340
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 340
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 34,
"y": 340
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 340
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 340
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 307
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 340
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 340
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 340
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1802,
"y": 307
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 340
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 340
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
}
],
"red_vest": [
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 180,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 340
},
{
"ms": 360,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 340
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 204,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 307
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 272,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 307
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 340,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 307
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 408,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 307
}
],
"red_vest": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 307
}
]
},
"draft": [
"flower-purple",
"hair-grey"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 476,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 340
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 340
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 340
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
"x": 476,
"y": 340
}
]
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
"x": 629,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 340
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 340
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 782,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 340
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 340
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 935,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 340
}
],
"oilskins": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 340
}
],
"green_toque": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 340
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 340
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1037,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 340
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 340
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1241,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 340
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 340
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1445,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 340
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 340
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 340
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
"x": 1445,
"y": 340
}
]
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
"x": 1649,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 340
}
],
"oilskins": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 340
}
],
"green_toque": [
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 340
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 340
},
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 340
},
{
"ms": 220,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1853,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 340
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 340
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 340
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
"x": 1853,
"y": 340
}
]
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
"x": 1955,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 340
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 340
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 340
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 17,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 340
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 340
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 340
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
"x": 17,
"y": 373
}
]
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
"x": 119,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 340
}
],
"oilskins": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 340
}
],
"green_toque": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 340
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 373
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 340
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
"x": 221,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 373
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 373
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 373
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 373
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 373
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 561,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 373
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 373
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 373
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 373
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 373
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 901,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 373
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 373
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 373
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 373
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 373
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1241,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 373
}
],
"hair_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 373
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 373
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 373
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 373
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 373
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 373
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 373
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1581,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 373
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 373
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 373
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 373
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 373
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1921,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 373
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 373
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 406
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 406
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 406
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 221,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 406
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 406
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 406
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 406
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 561,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 406
}
],
"hair_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 406
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 406
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 406
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 406
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 714,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 406
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 406
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 406
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 406
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 969,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 406
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 406
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 406
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 406
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1224,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 406
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 406
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 406
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 406
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1479,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 406
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 406
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 406
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 406
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 406
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 406
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1649,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 406
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 406
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 406
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 406
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1904,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 406
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 406
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 406
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 406
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 439
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 439
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 439
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 119,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 439
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 439
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 439
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 439
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 439
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 374,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 439
}
],
"hair_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 439
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 439
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 439
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 439
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 439
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 439
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 544,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 406
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 406
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 406
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 406
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 406
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 714,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 406
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 406
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 406
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 406
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 439
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 439
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 884,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 439
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 439
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 439
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 439
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 439
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1054,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 439
}
],
"hair_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 439
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 439
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 439
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 439
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 439
}
]
},
"draft": [
"brick"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1224,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 439
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 439
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 439
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 439
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 439
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1564,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 439
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 439
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 439
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 439
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 439
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1904,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 439
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 439
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 439
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 439
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 439
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 472
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 472
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 472
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 204,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 472
}
],
"hair_brown": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 472
}
],
"hair_red": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 472
}
],
"skin_deep": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 472
}
],
"skin_dark": [
{
"ms": 300,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 472
},
{
"ms": 120,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 472
},
{
"ms": 320,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 472
},
{
"ms": 240,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 472
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 544,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 472
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 472
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 472
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 472
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 472
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 884,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 472
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 472
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 472
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 472
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 472
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1224,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 472
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 472
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 472
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 472
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 472
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1564,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 472
}
],
"hair_brown": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 472
}
],
"hair_red": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 472
}
],
"skin_deep": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 472
}
],
"skin_dark": [
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 472
},
{
"ms": 170,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 472
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1819,
"y": 472
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 472
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 472
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 472
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 472
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 472
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 472
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 472
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 472
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 472
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 472
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 472
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 472
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1989,
"y": 472
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 472
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 472
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 472
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 472
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 34,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 505
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 119,
"y": 505
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 505
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 505
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 289,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 505
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 505
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 505
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 505
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 544,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 505
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 505
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 505
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 505
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 505
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 505
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 714,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 505
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 505
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 505
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 505
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 969,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 505
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 505
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 505
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 505
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1224,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 505
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 505
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 505
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 505
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1479,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 505
}
],
"hair_brown": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 505
}
],
"hair_red": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1564,
"y": 505
}
],
"skin_deep": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 505
}
],
"skin_dark": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 505
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 505
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1649,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1666,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 505
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 505
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 505
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1768,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 505
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1819,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 505
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1870,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 505
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 505
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 505
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1972,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1989,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2006,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 505
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 2023,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 0,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 505
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 17,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 34,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 505
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 51,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 68,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 505
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 85,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 102,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 119,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 136,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 505
}
],
"hair_brown": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 153,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 170,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 505
}
],
"hair_red": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 187,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 204,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 505
}
],
"skin_deep": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 221,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 238,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 505
}
],
"skin_dark": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 255,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 505
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 272,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 505
}
]
},
"draft": [
"moss"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 289,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 306,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 323,
"y": 538
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 357,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 374,
"y": 538
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 408,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 425,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 442,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 459,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 476,
"y": 538
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 510,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 527,
"y": 538
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 561,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 578,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 595,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 612,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 629,
"y": 538
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 663,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 680,
"y": 538
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 714,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 731,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 748,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 765,
"y": 538
}
],
"red_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 799,
"y": 538
}
],
"green_hoodie": [
{
"ms": 2400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 538
},
{
"ms": 1200,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 538
},
{
"ms": 600,
"w": 16,
"h": 32,
"sheet": 0,
"x": 833,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 850,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 867,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 884,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 901,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 850,
"y": 538
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 935,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 952,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 969,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 918,
"y": 538
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1003,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1020,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1037,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 986,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1054,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1071,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1088,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1105,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1054,
"y": 538
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1139,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1156,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1173,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1122,
"y": 538
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1207,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1224,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1241,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1190,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1258,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1275,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1292,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1309,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1258,
"y": 538
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1343,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1360,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1377,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1326,
"y": 538
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1411,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1428,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1445,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1394,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1462,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1479,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1462,
"y": 538
}
],
"red_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1513,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1496,
"y": 538
}
],
"green_hoodie": [
{
"ms": 900,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 538
},
{
"ms": 260,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 538
},
{
"ms": 110,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 538
},
{
"ms": 1400,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 538
},
{
"ms": 700,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1547,
"y": 538
},
{
"ms": 500,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1530,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1564,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1581,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 289,
"y": 538
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1598,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1615,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 340,
"y": 538
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1632,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1649,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 391,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1666,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1683,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 442,
"y": 538
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1700,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1717,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 493,
"y": 538
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1734,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1751,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 544,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1768,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1785,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 595,
"y": 538
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1802,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1819,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 646,
"y": 538
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1836,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1853,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 697,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1870,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1887,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 748,
"y": 538
}
],
"red_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1904,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1921,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 782,
"y": 538
}
],
"green_hoodie": [
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1938,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 1955,
"y": 538
},
{
"ms": 140,
"w": 16,
"h": 32,
"sheet": 0,
"x": 816,
"y": 538
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
"x": 187,
"y": 712
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
"x": 187,
"y": 712
}
]
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
"x": 204,
"y": 712
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
"x": 204,
"y": 712
}
]
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
"x": 221,
"y": 712
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
"x": 221,
"y": 712
}
]
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
"x": 967,
"y": 655
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 991,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 967,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1015,
"y": 655
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1039,
"y": 655
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1063,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1039,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1087,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1111,
"y": 655
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1135,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1159,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1183,
"y": 655
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1207,
"y": 655
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1231,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1255,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1279,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1303,
"y": 655
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1327,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1351,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1375,
"y": 655
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1399,
"y": 655
},
{
"ms": 140,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1423,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1447,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1471,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1495,
"y": 655
},
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1519,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1495,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1543,
"y": 655
}
],
"brown": [
{
"ms": 1600,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1567,
"y": 655
},
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1591,
"y": 655
},
{
"ms": 900,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1567,
"y": 655
},
{
"ms": 240,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1615,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 967,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1639,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1639,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1663,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1687,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1663,
"y": 655
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1039,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1711,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1711,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1735,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1759,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1735,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1111,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1783,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1783,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1807,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1831,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1807,
"y": 655
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1207,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1855,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1855,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1879,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1903,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1879,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1303,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1927,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1927,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1951,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1975,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1951,
"y": 655
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1399,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1999,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1999,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2023,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2023,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1495,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 24,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 24,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 24,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 72,
"y": 676
}
],
"brown": [
{
"ms": 160,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1567,
"y": 655
},
{
"ms": 260,
"w": 23,
"h": 18,
"sheet": 0,
"x": 96,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 96,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 96,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 144,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1639,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1663,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1687,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1663,
"y": 655
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1711,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1735,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1759,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1735,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1783,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1807,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1831,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1807,
"y": 655
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1855,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1879,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1903,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1879,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1927,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1951,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1975,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1951,
"y": 655
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 1999,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2023,
"y": 655
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 0,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 2023,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 24,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 48,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 24,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 72,
"y": 676
}
],
"brown": [
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 96,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 120,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 96,
"y": 676
},
{
"ms": 150,
"w": 23,
"h": 18,
"sheet": 0,
"x": 144,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 168,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 192,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 216,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 192,
"y": 676
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 240,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 264,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 288,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 264,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 312,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 336,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 360,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 336,
"y": 676
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 384,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 408,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 432,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 408,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 456,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 480,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 504,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 480,
"y": 676
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 528,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 552,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 576,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 552,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 600,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 624,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 648,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 624,
"y": 676
}
],
"brown": [
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 672,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 696,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 720,
"y": 676
},
{
"ms": 130,
"w": 23,
"h": 18,
"sheet": 0,
"x": 696,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 848,
"y": 603
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 869,
"y": 603
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 890,
"y": 603
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 869,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 911,
"y": 603
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 932,
"y": 603
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 953,
"y": 603
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 974,
"y": 603
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 953,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 995,
"y": 603
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1016,
"y": 603
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1037,
"y": 603
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1058,
"y": 603
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1037,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1079,
"y": 603
},
{
"ms": 80,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1100,
"y": 603
},
{
"ms": 120,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1121,
"y": 603
},
{
"ms": 90,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1100,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 953,
"y": 603
},
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1142,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1037,
"y": 603
},
{
"ms": 650,
"w": 20,
"h": 26,
"sheet": 0,
"x": 1163,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1385,
"y": 676
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1402,
"y": 676
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1385,
"y": 676
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1419,
"y": 676
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1385,
"y": 676
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1402,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1436,
"y": 676
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1453,
"y": 676
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1436,
"y": 676
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1470,
"y": 676
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1436,
"y": 676
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1453,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1487,
"y": 676
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1504,
"y": 676
},
{
"ms": 900,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1487,
"y": 676
},
{
"ms": 1100,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1521,
"y": 676
},
{
"ms": 700,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1487,
"y": 676
},
{
"ms": 110,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1504,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1538,
"y": 676
},
{
"ms": 1000,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1555,
"y": 676
},
{
"ms": 1200,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1538,
"y": 676
},
{
"ms": 600,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1555,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1572,
"y": 676
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1589,
"y": 676
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1606,
"y": 676
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1589,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1623,
"y": 676
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1640,
"y": 676
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1657,
"y": 676
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1640,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1674,
"y": 676
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1691,
"y": 676
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1708,
"y": 676
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1691,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1725,
"y": 676
},
{
"ms": 140,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1742,
"y": 676
},
{
"ms": 620,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1759,
"y": 676
},
{
"ms": 180,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1742,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1776,
"y": 676
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1385,
"y": 676
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1793,
"y": 676
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1385,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1810,
"y": 676
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1827,
"y": 676
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1844,
"y": 676
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1861,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1878,
"y": 676
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1895,
"y": 676
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1912,
"y": 676
},
{
"ms": 130,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1929,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1946,
"y": 676
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1538,
"y": 676
},
{
"ms": 150,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1963,
"y": 676
},
{
"ms": 120,
"w": 16,
"h": 16,
"sheet": 0,
"x": 1538,
"y": 676
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 866,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 882,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 866,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 898,
"y": 712
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 914,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 930,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 914,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 946,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 962,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 978,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 962,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 994,
"y": 712
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1010,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1026,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1010,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1042,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1058,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1074,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1058,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1090,
"y": 712
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1106,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1122,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1106,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1138,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1154,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1170,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1154,
"y": 712
},
{
"ms": 220,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1186,
"y": 712
}
],
"white": [
{
"ms": 1500,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1202,
"y": 712
},
{
"ms": 280,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1218,
"y": 712
},
{
"ms": 900,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1202,
"y": 712
},
{
"ms": 220,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1234,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 866,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1250,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1266,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1250,
"y": 712
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 914,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1282,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1298,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1282,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 962,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1314,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1330,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1314,
"y": 712
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1010,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1346,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1362,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1346,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1058,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1378,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1394,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1378,
"y": 712
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1106,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1410,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1426,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1410,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1154,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1442,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1458,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1442,
"y": 712
}
],
"white": [
{
"ms": 260,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1202,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1474,
"y": 712
},
{
"ms": 120,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1490,
"y": 712
},
{
"ms": 70,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1474,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1506,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 866,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1522,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 866,
"y": 712
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1538,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 914,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1554,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 914,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1570,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1586,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1602,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1618,
"y": 712
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1634,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1650,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1666,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1682,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1698,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1714,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1730,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1746,
"y": 712
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1762,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1778,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1794,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1810,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1826,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1154,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1842,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1154,
"y": 712
}
],
"white": [
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1858,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1202,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1874,
"y": 712
},
{
"ms": 130,
"w": 15,
"h": 14,
"sheet": 0,
"x": 1202,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1890,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1905,
"y": 712
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1890,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1905,
"y": 712
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1890,
"y": 712
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1920,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1935,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1950,
"y": 712
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1935,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1950,
"y": 712
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1935,
"y": 712
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1965,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1980,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1995,
"y": 712
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1980,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1995,
"y": 712
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 1980,
"y": 712
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 2010,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 2025,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 0,
"y": 729
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 2025,
"y": 712
},
{
"ms": 150,
"w": 14,
"h": 14,
"sheet": 0,
"x": 0,
"y": 729
},
{
"ms": 800,
"w": 14,
"h": 14,
"sheet": 0,
"x": 2025,
"y": 712
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1876,
"y": 603
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1893,
"y": 603
},
{
"ms": 80,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1910,
"y": 603
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1893,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1927,
"y": 603
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1944,
"y": 603
},
{
"ms": 80,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1961,
"y": 603
},
{
"ms": 70,
"w": 16,
"h": 22,
"sheet": 0,
"x": 1944,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 15,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 30,
"y": 729
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 15,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 45,
"y": 729
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 15,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 45,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 30,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 60,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 75,
"y": 729
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 60,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 90,
"y": 729
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 60,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 90,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 75,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 105,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 120,
"y": 729
},
{
"ms": 500,
"w": 14,
"h": 14,
"sheet": 0,
"x": 105,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 135,
"y": 729
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 105,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 135,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 120,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 150,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 165,
"y": 729
},
{
"ms": 900,
"w": 14,
"h": 14,
"sheet": 0,
"x": 150,
"y": 729
},
{
"ms": 400,
"w": 14,
"h": 14,
"sheet": 0,
"x": 180,
"y": 729
},
{
"ms": 700,
"w": 14,
"h": 14,
"sheet": 0,
"x": 150,
"y": 729
},
{
"ms": 160,
"w": 14,
"h": 14,
"sheet": 0,
"x": 165,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 195,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 15,
"y": 729
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 210,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 15,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 225,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 240,
"y": 729
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 255,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 270,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 285,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 300,
"y": 729
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 315,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 330,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 345,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 150,
"y": 729
},
{
"ms": 120,
"w": 14,
"h": 14,
"sheet": 0,
"x": 360,
"y": 729
},
{
"ms": 110,
"w": 14,
"h": 14,
"sheet": 0,
"x": 150,
"y": 729
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 50,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 76,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 102,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 76,
"y": 633
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 128,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 154,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 180,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 154,
"y": 633
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 206,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 232,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 258,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 232,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 284,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 310,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 336,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 310,
"y": 633
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 362,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 388,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 414,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 388,
"y": 633
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 440,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 466,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 492,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 466,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 518,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 544,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 570,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 544,
"y": 633
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 596,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 622,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 648,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 622,
"y": 633
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 674,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 700,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 726,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 700,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 752,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 778,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 752,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 804,
"y": 633
}
],
"dark": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 830,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 856,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 830,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 882,
"y": 633
}
],
"brown": [
{
"ms": 420,
"w": 25,
"h": 20,
"sheet": 0,
"x": 908,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 934,
"y": 633
},
{
"ms": 180,
"w": 25,
"h": 20,
"sheet": 0,
"x": 908,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 960,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 986,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1012,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 986,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1038,
"y": 633
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1064,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1090,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1064,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1116,
"y": 633
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1142,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1168,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1142,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1194,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1220,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1246,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1220,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1272,
"y": 633
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1298,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1324,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1298,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1350,
"y": 633
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1376,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1402,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1376,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1428,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1454,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1480,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1454,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1506,
"y": 633
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1532,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1558,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1532,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1584,
"y": 633
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1610,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1636,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1610,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1662,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1688,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1714,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1688,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1740,
"y": 633
}
],
"dark": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1766,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1792,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1766,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1818,
"y": 633
}
],
"brown": [
{
"ms": 1800,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1844,
"y": 633
},
{
"ms": 160,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1870,
"y": 633
},
{
"ms": 1100,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1844,
"y": 633
},
{
"ms": 220,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1896,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 1922,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1948,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1974,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 1948,
"y": 633
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 2000,
"y": 633
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 0,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 26,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 0,
"y": 655
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 52,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 78,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 104,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 78,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 130,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 156,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 182,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 156,
"y": 655
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 208,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 234,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 260,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 234,
"y": 655
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 286,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 312,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 338,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 312,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 364,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 390,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 416,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 390,
"y": 655
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 442,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 468,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 494,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 468,
"y": 655
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 520,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 546,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 572,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 546,
"y": 655
}
]
},
"draft": [],
"lint": [],
"status": "approved 2026-10-29",
"notes": ""
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
"x": 598,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 624,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 650,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 624,
"y": 655
}
],
"dark": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 676,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 702,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 728,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 702,
"y": 655
}
],
"brown": [
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 754,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 780,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 806,
"y": 655
},
{
"ms": 140,
"w": 25,
"h": 20,
"sheet": 0,
"x": 780,
"y": 655
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
"x": 1691,
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
"x": 316,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1631,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1618,
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
"x": 0,
"y": 571
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1590,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 91,
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
"x": 353,
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
"x": 569,
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
"x": 839,
"y": 655
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 716,
"y": 712
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 525,
"y": 729
}
]
},
"draft": [
"mackerel"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 98,
"y": 571
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1257,
"y": 603
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 910,
"y": 655
}
]
},
"draft": [
"pollock"
],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1972,
"y": 538
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 1498,
"y": 603
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"x": 13,
"y": 633
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
}
]
}
],
"critic_changes": [
{
"id": "obj.house.basin",
"before": {
"v": 1,
"date": "2026-10-29T22:58:20",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 14,
"h": 17,
"sheet": 0,
"x": 787,
"y": 676
},
"after": {
"ms": 0,
"w": 14,
"h": 17,
"sheet": 0,
"x": 772,
"y": 676
},
"verdict": "pass",
"fixed": [
"tap, drain, pedestal and foot centred on the 14 px bowl (even widths)",
"top-left light instead of pillow shading; the pedestal reads as a column"
],
"open": []
},
{
"id": "obj.house.chair_n",
"before": {
"v": 1,
"date": "2026-10-29T22:58:21",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 12,
"h": 25,
"sheet": 0,
"x": 1485,
"y": 603
},
"after": {
"ms": 0,
"w": 12,
"h": 22,
"sheet": 0,
"x": 1978,
"y": 603
},
"verdict": "pass",
"fixed": [
"spindles evenly spaced and mirrored (2-2-2 gaps)",
"has a seat; legs have a lit core like chair_s"
],
"open": []
},
{
"id": "obj.house.chair_s",
"before": {
"v": 1,
"date": "2026-10-29T22:58:22",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 12,
"h": 21,
"sheet": 0,
"x": 0,
"y": 633
},
"after": {
"ms": 0,
"w": 12,
"h": 21,
"sheet": 0,
"x": 2024,
"y": 603
},
"verdict": "pass",
"fixed": [
"spindles evenly spaced and mirrored, matching chair_n"
],
"open": []
},
{
"id": "obj.house.desk",
"before": {
"v": 1,
"date": "2026-10-29T22:58:18",
"note": "before critic-gate fix (AD: symmetry / laptop outline+proportions)",
"w": 36,
"h": 27,
"sheet": 0,
"x": 784,
"y": 603
},
"after": {
"ms": 0,
"w": 36,
"h": 28,
"sheet": 0,
"x": 722,
"y": 603
},
"verdict": "pass",
"fixed": [
"the laptop, books and mug are separate parts with their own outlines; the desk's outline runs behind them",
"the laptop is redrawn at its own proportions (lid 8 px, base 5 px), facing the viewer"
],
"open": []
}
],
"lint_totals": {
"errors": 0,
"warnings": 0
}
};
