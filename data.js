window.REVIEW = {
"built": "2026-10-29T21:01",
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
"src": "img/map_bay_north_calm_all_0.png",
"ms": 200
},
{
"src": "img/map_bay_north_calm_all_1.png",
"ms": 200
},
{
"src": "img/map_bay_north_calm_all_2.png",
"ms": 200
},
{
"src": "img/map_bay_north_calm_all_3.png",
"ms": 200
},
{
"src": "img/map_bay_north_calm_all_4.png",
"ms": 200
},
{
"src": "img/map_bay_north_calm_all_5.png",
"ms": 200
},
{
"src": "img/map_bay_north_calm_all_6.png",
"ms": 200
},
{
"src": "img/map_bay_north_calm_all_7.png",
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
"src": "img/map_bay_north_swell_all_0.png",
"ms": 200
},
{
"src": "img/map_bay_north_swell_all_1.png",
"ms": 200
},
{
"src": "img/map_bay_north_swell_all_2.png",
"ms": 200
},
{
"src": "img/map_bay_north_swell_all_3.png",
"ms": 200
},
{
"src": "img/map_bay_north_swell_all_4.png",
"ms": 200
},
{
"src": "img/map_bay_north_swell_all_5.png",
"ms": 200
},
{
"src": "img/map_bay_north_swell_all_6.png",
"ms": 200
},
{
"src": "img/map_bay_north_swell_all_7.png",
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
"w": 480,
"h": 288,
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
"w": 480,
"h": 288,
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
"src": "img/terrain.cobble.m0.0.png",
"ms": 0
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
"src": "img/terrain.cobble.m17.0.png",
"ms": 0
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
"src": "img/terrain.cobble.m255.0.png",
"ms": 0
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
"src": "history/terrain.cobble.m255/v1.png"
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
"src": "img/terrain.cobble.m68.0.png",
"ms": 0
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
"src": "img/terrain.cobble.m85.0.png",
"ms": 0
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
"src": "img/terrain.dirt.m0.0.png",
"ms": 0
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
"src": "img/terrain.dirt.m17.0.png",
"ms": 0
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
"src": "img/terrain.dirt.m255.0.png",
"ms": 0
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
"src": "history/terrain.dirt.m255/v1.png"
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
"src": "img/terrain.dirt.m255.v1.0.png",
"ms": 0
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
"src": "img/terrain.dirt.m255.v2.0.png",
"ms": 0
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
"src": "img/terrain.dirt.m68.0.png",
"ms": 0
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
"src": "img/terrain.dirt.m85.0.png",
"ms": 0
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
"src": "img/terrain.granite.m0.0.png",
"ms": 0
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
"src": "img/terrain.granite.m17.0.png",
"ms": 0
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
"src": "img/terrain.granite.m255.0.png",
"ms": 0
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
"src": "history/terrain.granite.m255/v1.png"
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
"src": "img/terrain.granite.m68.0.png",
"ms": 0
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
"src": "img/terrain.granite.m85.0.png",
"ms": 0
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
"src": "img/terrain.grass.m0.0.png",
"ms": 0
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
"src": "img/terrain.grass.m17.0.png",
"ms": 0
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
"src": "img/terrain.grass.m255.0.png",
"ms": 0
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
"src": "history/terrain.grass.m255/v1.png"
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
"src": "img/terrain.grass.m255.v1.0.png",
"ms": 0
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
"src": "img/terrain.grass.m255.v2.0.png",
"ms": 0
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
"src": "img/terrain.grass.m255.v3.0.png",
"ms": 0
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
"src": "img/terrain.grass.m68.0.png",
"ms": 0
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
"src": "img/terrain.grass.m85.0.png",
"ms": 0
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
"src": "img/water.open.p0.0.png",
"ms": 300
},
{
"src": "img/water.open.p0.1.png",
"ms": 300
},
{
"src": "img/water.open.p0.2.png",
"ms": 300
},
{
"src": "img/water.open.p0.3.png",
"ms": 300
},
{
"src": "img/water.open.p0.4.png",
"ms": 300
},
{
"src": "img/water.open.p0.5.png",
"ms": 300
},
{
"src": "img/water.open.p0.6.png",
"ms": 300
},
{
"src": "img/water.open.p0.7.png",
"ms": 300
}
],
"calm": [
{
"src": "img/water.open.p0__calm.0.png",
"ms": 300
},
{
"src": "img/water.open.p0__calm.1.png",
"ms": 300
},
{
"src": "img/water.open.p0__calm.2.png",
"ms": 300
},
{
"src": "img/water.open.p0__calm.3.png",
"ms": 300
},
{
"src": "img/water.open.p0__calm.4.png",
"ms": 300
},
{
"src": "img/water.open.p0__calm.5.png",
"ms": 300
},
{
"src": "img/water.open.p0__calm.6.png",
"ms": 300
},
{
"src": "img/water.open.p0__calm.7.png",
"ms": 300
}
],
"breeze": [
{
"src": "img/water.open.p0__breeze.0.png",
"ms": 170
},
{
"src": "img/water.open.p0__breeze.1.png",
"ms": 170
},
{
"src": "img/water.open.p0__breeze.2.png",
"ms": 170
},
{
"src": "img/water.open.p0__breeze.3.png",
"ms": 170
},
{
"src": "img/water.open.p0__breeze.4.png",
"ms": 170
},
{
"src": "img/water.open.p0__breeze.5.png",
"ms": 170
},
{
"src": "img/water.open.p0__breeze.6.png",
"ms": 170
},
{
"src": "img/water.open.p0__breeze.7.png",
"ms": 170
}
],
"swell": [
{
"src": "img/water.open.p0__swell.0.png",
"ms": 200
},
{
"src": "img/water.open.p0__swell.1.png",
"ms": 200
},
{
"src": "img/water.open.p0__swell.2.png",
"ms": 200
},
{
"src": "img/water.open.p0__swell.3.png",
"ms": 200
},
{
"src": "img/water.open.p0__swell.4.png",
"ms": 200
},
{
"src": "img/water.open.p0__swell.5.png",
"ms": 200
},
{
"src": "img/water.open.p0__swell.6.png",
"ms": 200
},
{
"src": "img/water.open.p0__swell.7.png",
"ms": 200
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
"src": "img/edge.cobble_water.m0.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m0.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m0.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m0.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.cobble_water.m0__calm.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m0__calm.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m0__calm.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m0__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.cobble_water.m0__breeze.0.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m0__breeze.1.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m0__breeze.2.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m0__breeze.3.png",
"ms": 240
}
],
"swell": [
{
"src": "img/edge.cobble_water.m0__swell.0.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m0__swell.1.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m0__swell.2.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m0__swell.3.png",
"ms": 180
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
"src": "img/edge.cobble_water.m17.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m17.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m17.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m17.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.cobble_water.m17__calm.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m17__calm.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m17__calm.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m17__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.cobble_water.m17__breeze.0.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m17__breeze.1.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m17__breeze.2.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m17__breeze.3.png",
"ms": 240
}
],
"swell": [
{
"src": "img/edge.cobble_water.m17__swell.0.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m17__swell.1.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m17__swell.2.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m17__swell.3.png",
"ms": 180
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
"src": "img/edge.cobble_water.m255.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m255.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m255.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m255.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.cobble_water.m255__calm.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m255__calm.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m255__calm.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m255__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.cobble_water.m255__breeze.0.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m255__breeze.1.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m255__breeze.2.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m255__breeze.3.png",
"ms": 240
}
],
"swell": [
{
"src": "img/edge.cobble_water.m255__swell.0.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m255__swell.1.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m255__swell.2.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m255__swell.3.png",
"ms": 180
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
"src": "img/edge.cobble_water.m68.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m68.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m68.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m68.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.cobble_water.m68__calm.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m68__calm.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m68__calm.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m68__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.cobble_water.m68__breeze.0.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m68__breeze.1.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m68__breeze.2.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m68__breeze.3.png",
"ms": 240
}
],
"swell": [
{
"src": "img/edge.cobble_water.m68__swell.0.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m68__swell.1.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m68__swell.2.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m68__swell.3.png",
"ms": 180
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
"src": "img/edge.cobble_water.m85.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m85.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m85.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m85.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.cobble_water.m85__calm.0.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m85__calm.1.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m85__calm.2.png",
"ms": 320
},
{
"src": "img/edge.cobble_water.m85__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.cobble_water.m85__breeze.0.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m85__breeze.1.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m85__breeze.2.png",
"ms": 240
},
{
"src": "img/edge.cobble_water.m85__breeze.3.png",
"ms": 240
}
],
"swell": [
{
"src": "img/edge.cobble_water.m85__swell.0.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m85__swell.1.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m85__swell.2.png",
"ms": 180
},
{
"src": "img/edge.cobble_water.m85__swell.3.png",
"ms": 180
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
"src": "img/edge.granite_water.m0.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m0.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m0.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m0.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.granite_water.m0__calm.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m0__calm.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m0__calm.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m0__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.granite_water.m0__breeze.0.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m0__breeze.1.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m0__breeze.2.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m0__breeze.3.png",
"ms": 220
}
],
"swell": [
{
"src": "img/edge.granite_water.m0__swell.0.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m0__swell.1.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m0__swell.2.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m0__swell.3.png",
"ms": 170
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
"src": "img/edge.granite_water.m17.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m17.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m17.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m17.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.granite_water.m17__calm.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m17__calm.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m17__calm.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m17__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.granite_water.m17__breeze.0.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m17__breeze.1.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m17__breeze.2.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m17__breeze.3.png",
"ms": 220
}
],
"swell": [
{
"src": "img/edge.granite_water.m17__swell.0.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m17__swell.1.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m17__swell.2.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m17__swell.3.png",
"ms": 170
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
"src": "img/edge.granite_water.m255.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m255.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m255.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m255.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.granite_water.m255__calm.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m255__calm.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m255__calm.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m255__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.granite_water.m255__breeze.0.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m255__breeze.1.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m255__breeze.2.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m255__breeze.3.png",
"ms": 220
}
],
"swell": [
{
"src": "img/edge.granite_water.m255__swell.0.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m255__swell.1.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m255__swell.2.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m255__swell.3.png",
"ms": 170
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
"src": "img/edge.granite_water.m68.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m68.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m68.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m68.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.granite_water.m68__calm.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m68__calm.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m68__calm.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m68__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.granite_water.m68__breeze.0.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m68__breeze.1.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m68__breeze.2.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m68__breeze.3.png",
"ms": 220
}
],
"swell": [
{
"src": "img/edge.granite_water.m68__swell.0.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m68__swell.1.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m68__swell.2.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m68__swell.3.png",
"ms": 170
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
"src": "img/edge.granite_water.m85.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m85.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m85.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m85.3.png",
"ms": 320
}
],
"calm": [
{
"src": "img/edge.granite_water.m85__calm.0.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m85__calm.1.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m85__calm.2.png",
"ms": 320
},
{
"src": "img/edge.granite_water.m85__calm.3.png",
"ms": 320
}
],
"breeze": [
{
"src": "img/edge.granite_water.m85__breeze.0.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m85__breeze.1.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m85__breeze.2.png",
"ms": 220
},
{
"src": "img/edge.granite_water.m85__breeze.3.png",
"ms": 220
}
],
"swell": [
{
"src": "img/edge.granite_water.m85__swell.0.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m85__swell.1.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m85__swell.2.png",
"ms": 170
},
{
"src": "img/edge.granite_water.m85__swell.3.png",
"ms": 170
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
"src": "img/fx.handline.pull.0.png",
"ms": 150
},
{
"src": "img/fx.handline.pull.1.png",
"ms": 150
},
{
"src": "img/fx.handline.pull.2.png",
"ms": 150
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
"src": "img/fx.handline.slack.0.png",
"ms": 450
},
{
"src": "img/fx.handline.slack.1.png",
"ms": 450
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
"src": "img/fx.handline.taut.0.png",
"ms": 300
},
{
"src": "img/fx.handline.taut.1.png",
"ms": 300
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
"src": "img/fx.handline.twitch.0.png",
"ms": 90
},
{
"src": "img/fx.handline.twitch.1.png",
"ms": 70
},
{
"src": "img/fx.handline.twitch.2.png",
"ms": 140
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
"src": "img/fx.sign.capelin.0.png",
"ms": 120
},
{
"src": "img/fx.sign.capelin.1.png",
"ms": 120
},
{
"src": "img/fx.sign.capelin.2.png",
"ms": 120
},
{
"src": "img/fx.sign.capelin.3.png",
"ms": 120
},
{
"src": "img/fx.sign.capelin.4.png",
"ms": 120
},
{
"src": "img/fx.sign.capelin.5.png",
"ms": 120
},
{
"src": "img/fx.sign.capelin.6.png",
"ms": 120
},
{
"src": "img/fx.sign.capelin.7.png",
"ms": 120
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
"src": "img/fx.sign.gulls_diving.0.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.1.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.2.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.3.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.4.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.5.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.6.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.7.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.8.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.9.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.10.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.11.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.12.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.13.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.14.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.15.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.16.png",
"ms": 100
},
{
"src": "img/fx.sign.gulls_diving.17.png",
"ms": 100
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
"src": "img/fx.sign.gulls_rafting.0.png",
"ms": 260
},
{
"src": "img/fx.sign.gulls_rafting.1.png",
"ms": 260
},
{
"src": "img/fx.sign.gulls_rafting.2.png",
"ms": 260
},
{
"src": "img/fx.sign.gulls_rafting.3.png",
"ms": 260
},
{
"src": "img/fx.sign.gulls_rafting.4.png",
"ms": 260
},
{
"src": "img/fx.sign.gulls_rafting.5.png",
"ms": 260
},
{
"src": "img/fx.sign.gulls_rafting.6.png",
"ms": 260
},
{
"src": "img/fx.sign.gulls_rafting.7.png",
"ms": 260
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
"src": "img/fx.sign.whale_blow.0.png",
"ms": 4200
},
{
"src": "img/fx.sign.whale_blow.1.png",
"ms": 160
},
{
"src": "img/fx.sign.whale_blow.2.png",
"ms": 110
},
{
"src": "img/fx.sign.whale_blow.3.png",
"ms": 110
},
{
"src": "img/fx.sign.whale_blow.4.png",
"ms": 140
},
{
"src": "img/fx.sign.whale_blow.5.png",
"ms": 200
},
{
"src": "img/fx.sign.whale_blow.6.png",
"ms": 220
},
{
"src": "img/fx.sign.whale_blow.7.png",
"ms": 220
},
{
"src": "img/fx.sign.whale_blow.8.png",
"ms": 220
},
{
"src": "img/fx.sign.whale_blow.9.png",
"ms": 200
},
{
"src": "img/fx.sign.whale_blow.10.png",
"ms": 200
},
{
"src": "img/fx.sign.whale_blow.11.png",
"ms": 380
},
{
"src": "img/fx.sign.whale_blow.12.png",
"ms": 240
},
{
"src": "img/fx.sign.whale_blow.13.png",
"ms": 450
},
{
"src": "img/fx.sign.whale_blow.14.png",
"ms": 500
},
{
"src": "img/fx.sign.whale_blow.15.png",
"ms": 400
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
"src": "img/fx.spray.0.png",
"ms": 90
},
{
"src": "img/fx.spray.1.png",
"ms": 90
},
{
"src": "img/fx.spray.2.png",
"ms": 110
},
{
"src": "img/fx.spray.3.png",
"ms": 140
},
{
"src": "img/fx.spray.4.png",
"ms": 1400
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
"src": "history/fx.spray/v1.png"
}
]
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
"src": "img/fx.whitecap.0.png",
"ms": 160
},
{
"src": "img/fx.whitecap.1.png",
"ms": 140
},
{
"src": "img/fx.whitecap.2.png",
"ms": 220
},
{
"src": "img/fx.whitecap.3.png",
"ms": 200
},
{
"src": "img/fx.whitecap.4.png",
"ms": 260
},
{
"src": "img/fx.whitecap.5.png",
"ms": 900
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
"src": "history/fx.whitecap/v1.png"
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
"src": "img/obj.buoys.0.png",
"ms": 0
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
"src": "img/obj.clothesline.0.png",
"ms": 700
},
{
"src": "img/obj.clothesline.1.png",
"ms": 260
},
{
"src": "img/obj.clothesline.2.png",
"ms": 420
},
{
"src": "img/obj.clothesline.3.png",
"ms": 260
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
"src": "img/obj.fence_longer_h.0.png",
"ms": 0
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
"src": "img/obj.fence_longer_v.0.png",
"ms": 0
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
"src": "img/obj.fish_tub.0.png",
"ms": 0
}
],
"full": [
{
"src": "img/obj.fish_tub__full.0.png",
"ms": 0
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
"src": "img/obj.flake.0.png",
"ms": 0
}
],
"empty": [
{
"src": "img/obj.flake__empty.0.png",
"ms": 0
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
"src": "history/obj.flake/v1.png"
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
"src": "img/obj.house.armchair.0.png",
"ms": 0
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
"src": "img/obj.house.basin.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.bed_1.0.png",
"ms": 0
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
"src": "img/obj.house.bed_2.0.png",
"ms": 0
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
"src": "img/obj.house.bed_3.0.png",
"ms": 0
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
"src": "img/obj.house.bed_4.0.png",
"ms": 0
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
"src": "img/obj.house.bench.0.png",
"ms": 0
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
"src": "img/obj.house.bookcase.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.chair_e.0.png",
"ms": 0
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
"h": 25,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/chair_n.yaml",
"generator": null,
"variants": {
"(base)": [
{
"src": "img/obj.house.chair_n.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.chair_s.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.chair_w.0.png",
"ms": 0
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
"src": "img/obj.house.chest.0.png",
"ms": 0
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
"src": "img/obj.house.chest_mom.0.png",
"ms": 0
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
"src": "img/obj.house.chest_up.0.png",
"ms": 0
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
"src": "img/obj.house.chesterfield.0.png",
"ms": 0
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
"src": "img/obj.house.coat_tree.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.counter.0.png",
"ms": 0
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
"src": "img/obj.house.daybed.0.png",
"ms": 0
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
"h": 27,
"tags": [
"interior",
"house"
],
"source": "art/objects/interior/house/desk.yaml",
"generator": null,
"variants": {
"(base)": [
{
"src": "img/obj.house.desk.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.dresser.0.png",
"ms": 0
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
"src": "img/obj.house.dresser_mom.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.freezer.0.png",
"ms": 0
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
"src": "img/obj.house.fridge.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.hutch.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.mom_bed.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.nightstand_1.0.png",
"ms": 0
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
"src": "img/obj.house.nightstand_2.0.png",
"ms": 0
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
"src": "img/obj.house.nightstand_mom.0.png",
"ms": 0
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
"src": "img/obj.house.plant.0.png",
"ms": 0
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
"src": "img/obj.house.radio_table.0.png",
"ms": 0
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
"src": "img/obj.house.rocker.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.stair_rail.0.png",
"ms": 0
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
"src": "img/obj.house.stairs.0.png",
"ms": 0
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
"src": "img/obj.house.table.0.png",
"ms": 0
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
"src": "img/obj.house.toilet.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
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
"src": "img/obj.house.tub.0.png",
"ms": 0
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
"src": "img/obj.house.tv_stand.0.png",
"ms": 0
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
"w": 176,
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
"src": "img/obj.house.wall_bath.0.png",
"ms": 0
}
]
},
"draft": [],
"lint": [],
"status": "awaiting approval",
"notes": ""
},
{
"id": "obj.house.wall_halfbath",
"kind": "object",
"w": 80,
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
"src": "img/obj.house.wall_halfbath.0.png",
"ms": 0
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
"w": 192,
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
"src": "img/obj.house.wall_siblings.0.png",
"ms": 0
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
"src": "img/obj.house.washer.0.png",
"ms": 0
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
"src": "img/obj.house.wood_stove.0.png",
"ms": 0
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
"src": "img/obj.house.woodbox.0.png",
"ms": 0
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
"src": "img/obj.house_saltbox.0.png",
"ms": 0
}
],
"restored": [
{
"src": "img/obj.house_saltbox__restored.0.png",
"ms": 0
}
],
"restored_white": [
{
"src": "img/obj.house_saltbox__restored_white.0.png",
"ms": 0
}
],
"restored_ochre": [
{
"src": "img/obj.house_saltbox__restored_ochre.0.png",
"ms": 0
}
],
"restored_blue": [
{
"src": "img/obj.house_saltbox__restored_blue.0.png",
"ms": 0
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
"src": "history/obj.house_saltbox/v1.png"
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
"src": "img/obj.lobster_pot.0.png",
"ms": 0
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
"src": "img/obj.lobster_pots_stack.0.png",
"ms": 0
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
"w": 64,
"h": 28,
"tags": [
"boat",
"harbour"
],
"source": "art/objects/harbour/punt.yaml",
"generator": null,
"variants": {
"(base)": [
{
"src": "img/obj.punt.0.png",
"ms": 900
},
{
"src": "img/obj.punt.1.png",
"ms": 900
}
],
"calm": [
{
"src": "img/obj.punt__calm.0.png",
"ms": 900
},
{
"src": "img/obj.punt__calm.1.png",
"ms": 900
}
],
"breeze": [
{
"src": "img/obj.punt__breeze.0.png",
"ms": 450
},
{
"src": "img/obj.punt__breeze.1.png",
"ms": 450
},
{
"src": "img/obj.punt__breeze.2.png",
"ms": 450
}
],
"swell": [
{
"src": "img/obj.punt__swell.0.png",
"ms": 300
},
{
"src": "img/obj.punt__swell.1.png",
"ms": 180
},
{
"src": "img/obj.punt__swell.2.png",
"ms": 300
},
{
"src": "img/obj.punt__swell.3.png",
"ms": 180
}
],
"weathered": [
{
"src": "img/obj.punt__weathered.0.png",
"ms": 900
},
{
"src": "img/obj.punt__weathered.1.png",
"ms": 900
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
"date": "2026-10-29T00:47:40",
"note": "v1 proof asset, overnight build",
"src": "history/obj.punt/v1.png"
}
]
},
{
"id": "obj.punt_sea_back",
"kind": "object",
"w": 64,
"h": 28,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_back.yaml",
"generator": null,
"variants": {
"(base)": [
{
"src": "img/obj.punt_sea_back.0.png",
"ms": 900
},
{
"src": "img/obj.punt_sea_back.1.png",
"ms": 900
}
],
"calm": [
{
"src": "img/obj.punt_sea_back__calm.0.png",
"ms": 900
},
{
"src": "img/obj.punt_sea_back__calm.1.png",
"ms": 900
}
],
"breeze": [
{
"src": "img/obj.punt_sea_back__breeze.0.png",
"ms": 450
},
{
"src": "img/obj.punt_sea_back__breeze.1.png",
"ms": 450
},
{
"src": "img/obj.punt_sea_back__breeze.2.png",
"ms": 450
}
],
"swell": [
{
"src": "img/obj.punt_sea_back__swell.0.png",
"ms": 300
},
{
"src": "img/obj.punt_sea_back__swell.1.png",
"ms": 180
},
{
"src": "img/obj.punt_sea_back__swell.2.png",
"ms": 300
},
{
"src": "img/obj.punt_sea_back__swell.3.png",
"ms": 180
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
"w": 64,
"h": 28,
"tags": [
"boat",
"sea"
],
"source": "art/objects/sea/punt_sea_front.yaml",
"generator": null,
"variants": {
"(base)": [
{
"src": "img/obj.punt_sea_front.0.png",
"ms": 900
},
{
"src": "img/obj.punt_sea_front.1.png",
"ms": 900
}
],
"calm": [
{
"src": "img/obj.punt_sea_front__calm.0.png",
"ms": 900
},
{
"src": "img/obj.punt_sea_front__calm.1.png",
"ms": 900
}
],
"breeze": [
{
"src": "img/obj.punt_sea_front__breeze.0.png",
"ms": 450
},
{
"src": "img/obj.punt_sea_front__breeze.1.png",
"ms": 450
},
{
"src": "img/obj.punt_sea_front__breeze.2.png",
"ms": 450
}
],
"swell": [
{
"src": "img/obj.punt_sea_front__swell.0.png",
"ms": 300
},
{
"src": "img/obj.punt_sea_front__swell.1.png",
"ms": 180
},
{
"src": "img/obj.punt_sea_front__swell.2.png",
"ms": 300
},
{
"src": "img/obj.punt_sea_front__swell.3.png",
"ms": 180
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
"src": "img/obj.rocks_m.0.png",
"ms": 0
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
"src": "img/obj.rocks_s.0.png",
"ms": 0
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
"src": "img/obj.rope_coil.0.png",
"ms": 0
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
"src": "img/obj.stage.0.png",
"ms": 0
}
],
"restored": [
{
"src": "img/obj.stage__restored.0.png",
"ms": 0
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
"src": "history/obj.stage/v1.png"
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
"src": "img/obj.truck_buyer.0.png",
"ms": 0
}
],
"empty": [
{
"src": "img/obj.truck_buyer__empty.0.png",
"ms": 0
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
"src": "img/obj.tuckamore_l.0.png",
"ms": 0
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
"src": "history/obj.tuckamore_l/v1.png"
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
"src": "img/obj.tuckamore_m.0.png",
"ms": 0
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
"src": "history/obj.tuckamore_m/v1.png"
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
"src": "img/obj.tuckamore_s.0.png",
"ms": 0
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
"src": "history/obj.tuckamore_s/v1.png"
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
"src": "img/obj.wharf_post.0.png",
"ms": 0
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
"src": "history/obj.wharf_post/v1.png"
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
"src": "img/obj.woodpile.0.png",
"ms": 0
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
"src": "img/crop.potato.s1.0.png",
"ms": 0
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
"src": "history/crop.potato.s1/v1.png"
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
"src": "img/crop.potato.s2.0.png",
"ms": 0
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
"src": "history/crop.potato.s2/v1.png"
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
"src": "img/crop.potato.s3.0.png",
"ms": 0
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
"src": "history/crop.potato.s3/v1.png"
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
"src": "img/item.cod.0.png",
"ms": 0
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
"src": "history/item.cod/v1.png"
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
"src": "img/item.fish.cod.0.png",
"ms": 0
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
"src": "img/item.fish.flounder.0.png",
"ms": 0
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
"src": "img/item.fish.halibut.0.png",
"ms": 0
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
"src": "img/item.fish.mackerel.0.png",
"ms": 0
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
"src": "img/item.fish.pollock.0.png",
"ms": 0
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
"src": "img/item.fish.sculpin.0.png",
"ms": 0
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
"src": "img/item.handline_held.0.png",
"ms": 300
},
{
"src": "img/item.handline_held.1.png",
"ms": 300
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
"src": "img/item.jigger.0.png",
"ms": 0
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
"src": "history/item.jigger/v1.png"
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
"src": "img/item.jigger_held.0.png",
"ms": 260
},
{
"src": "img/item.jigger_held.1.png",
"ms": 300
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
"src": "img/item.phone_held.0.png",
"ms": 900
},
{
"src": "img/item.phone_held.1.png",
"ms": 110
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
"src": "img/item.potato.0.png",
"ms": 0
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
"src": "history/item.potato/v1.png"
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
"src": "img/item.salt_bucket.0.png",
"ms": 0
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
"src": "history/item.salt_bucket/v1.png"
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
"src": "img/ui.button.0.png",
"ms": 0
}
],
"hover": [
{
"src": "img/ui.button__hover.0.png",
"ms": 0
}
],
"pressed": [
{
"src": "img/ui.button__pressed.0.png",
"ms": 0
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
"src": "img/ui.catch_card.0.png",
"ms": 0
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
"src": "img/ui.catch_card_pb.0.png",
"ms": 0
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
"src": "img/ui.font.0.png",
"ms": 0
}
],
"plain": [
{
"src": "img/ui.font__plain.0.png",
"ms": 0
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
"src": "img/ui.list_row.0.png",
"ms": 0
}
],
"selected": [
{
"src": "img/ui.list_row__selected.0.png",
"ms": 0
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
"src": "img/ui.map.coast_dot.0.png",
"ms": 0
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
"src": "img/ui.map.gps.0.png",
"ms": 0
}
],
"searching": [
{
"src": "img/ui.map.gps__searching.0.png",
"ms": 0
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
"src": "img/ui.map.label.0.png",
"ms": 0
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
"src": "img/ui.map.land.0.png",
"ms": 0
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
"src": "img/ui.map.marker_p1.0.png",
"ms": 0
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
"src": "img/ui.map.marker_p2.0.png",
"ms": 0
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
"src": "img/ui.map.marker_p3.0.png",
"ms": 0
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
"src": "img/ui.map.marker_p4.0.png",
"ms": 0
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
"src": "img/ui.map.signal.0.png",
"ms": 0
}
],
"n0": [
{
"src": "img/ui.map.signal__n0.0.png",
"ms": 0
}
],
"n1": [
{
"src": "img/ui.map.signal__n1.0.png",
"ms": 0
}
],
"n2": [
{
"src": "img/ui.map.signal__n2.0.png",
"ms": 0
}
],
"n3": [
{
"src": "img/ui.map.signal__n3.0.png",
"ms": 0
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
"src": "img/ui.map.water.0.png",
"ms": 0
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
"src": "img/ui.panel.0.png",
"ms": 0
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
"src": "img/ui.phone_app_icons.0.png",
"ms": 0
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
"src": "history/ui.phone_app_icons/v1.png"
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
"src": "img/ui.phone_frame.0.png",
"ms": 0
}
],
"no_signal": [
{
"src": "img/ui.phone_frame__no_signal.0.png",
"ms": 0
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
"src": "history/ui.phone_frame/v1.png"
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
"src": "img/ui.phone_map.0.png",
"ms": 0
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
"src": "img/chr.elder_woman.idle.down.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.down.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.down.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.down.3.png",
"ms": 600
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.idle.down__blue_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.down__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.down__blue_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.down__blue_cardigan.3.png",
"ms": 600
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.idle.down__red_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.down__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.down__red_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.down__red_cardigan.3.png",
"ms": 600
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
"src": "img/chr.elder_woman.idle.left.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.left.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.left.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.left.3.png",
"ms": 600
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.idle.left__blue_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.left__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.left__blue_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.left__blue_cardigan.3.png",
"ms": 600
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.idle.left__red_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.left__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.left__red_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.left__red_cardigan.3.png",
"ms": 600
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
"src": "img/chr.elder_woman.idle.right.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.right.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.right.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.right.3.png",
"ms": 600
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.idle.right__blue_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.right__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.right__blue_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.right__blue_cardigan.3.png",
"ms": 600
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.idle.right__red_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.right__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.right__red_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.right__red_cardigan.3.png",
"ms": 600
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
"src": "img/chr.elder_woman.idle.up.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.up.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.up.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.up.3.png",
"ms": 600
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.idle.up__blue_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.up__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.up__blue_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.up__blue_cardigan.3.png",
"ms": 600
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.idle.up__red_cardigan.0.png",
"ms": 2400
},
{
"src": "img/chr.elder_woman.idle.up__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.idle.up__red_cardigan.2.png",
"ms": 1200
},
{
"src": "img/chr.elder_woman.idle.up__red_cardigan.3.png",
"ms": 600
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
"src": "img/chr.elder_woman.walk.down.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down.3.png",
"ms": 140
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.walk.down__blue_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down__blue_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down__blue_cardigan.3.png",
"ms": 140
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.walk.down__red_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down__red_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.down__red_cardigan.3.png",
"ms": 140
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
"src": "img/chr.elder_woman.walk.left.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left.3.png",
"ms": 140
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.walk.left__blue_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left__blue_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left__blue_cardigan.3.png",
"ms": 140
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.walk.left__red_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left__red_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.left__red_cardigan.3.png",
"ms": 140
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
"src": "img/chr.elder_woman.walk.right.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right.3.png",
"ms": 140
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.walk.right__blue_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right__blue_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right__blue_cardigan.3.png",
"ms": 140
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.walk.right__red_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right__red_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.right__red_cardigan.3.png",
"ms": 140
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
"src": "img/chr.elder_woman.walk.up.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up.3.png",
"ms": 140
}
],
"blue_cardigan": [
{
"src": "img/chr.elder_woman.walk.up__blue_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up__blue_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up__blue_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up__blue_cardigan.3.png",
"ms": 140
}
],
"red_cardigan": [
{
"src": "img/chr.elder_woman.walk.up__red_cardigan.0.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up__red_cardigan.1.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up__red_cardigan.2.png",
"ms": 140
},
{
"src": "img/chr.elder_woman.walk.up__red_cardigan.3.png",
"ms": 140
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
"src": "img/chr.fisherman.idle.down.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.down.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.down.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.down.3.png",
"ms": 600
}
],
"sweater": [
{
"src": "img/chr.fisherman.idle.down__sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.down__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.down__sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.down__sweater.3.png",
"ms": 600
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.idle.down__red_sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.down__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.down__red_sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.down__red_sweater.3.png",
"ms": 600
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
"src": "img/chr.fisherman.idle.left.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.left.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.left.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.left.3.png",
"ms": 600
}
],
"sweater": [
{
"src": "img/chr.fisherman.idle.left__sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.left__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.left__sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.left__sweater.3.png",
"ms": 600
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.idle.left__red_sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.left__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.left__red_sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.left__red_sweater.3.png",
"ms": 600
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
"src": "img/chr.fisherman.idle.right.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.right.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.right.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.right.3.png",
"ms": 600
}
],
"sweater": [
{
"src": "img/chr.fisherman.idle.right__sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.right__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.right__sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.right__sweater.3.png",
"ms": 600
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.idle.right__red_sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.right__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.right__red_sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.right__red_sweater.3.png",
"ms": 600
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
"src": "img/chr.fisherman.idle.up.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.up.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.up.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.up.3.png",
"ms": 600
}
],
"sweater": [
{
"src": "img/chr.fisherman.idle.up__sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.up__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.up__sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.up__sweater.3.png",
"ms": 600
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.idle.up__red_sweater.0.png",
"ms": 2400
},
{
"src": "img/chr.fisherman.idle.up__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.idle.up__red_sweater.2.png",
"ms": 1200
},
{
"src": "img/chr.fisherman.idle.up__red_sweater.3.png",
"ms": 600
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
"src": "img/chr.fisherman.walk.down.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down.3.png",
"ms": 140
}
],
"sweater": [
{
"src": "img/chr.fisherman.walk.down__sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down__sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down__sweater.3.png",
"ms": 140
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.walk.down__red_sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down__red_sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.down__red_sweater.3.png",
"ms": 140
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
"src": "img/chr.fisherman.walk.left.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left.3.png",
"ms": 140
}
],
"sweater": [
{
"src": "img/chr.fisherman.walk.left__sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left__sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left__sweater.3.png",
"ms": 140
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.walk.left__red_sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left__red_sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.left__red_sweater.3.png",
"ms": 140
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
"src": "img/chr.fisherman.walk.right.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right.3.png",
"ms": 140
}
],
"sweater": [
{
"src": "img/chr.fisherman.walk.right__sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right__sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right__sweater.3.png",
"ms": 140
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.walk.right__red_sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right__red_sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.right__red_sweater.3.png",
"ms": 140
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
"src": "img/chr.fisherman.walk.up.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up.3.png",
"ms": 140
}
],
"sweater": [
{
"src": "img/chr.fisherman.walk.up__sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up__sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up__sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up__sweater.3.png",
"ms": 140
}
],
"red_sweater": [
{
"src": "img/chr.fisherman.walk.up__red_sweater.0.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up__red_sweater.1.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up__red_sweater.2.png",
"ms": 140
},
{
"src": "img/chr.fisherman.walk.up__red_sweater.3.png",
"ms": 140
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
"src": "img/chr.mom.idle.down.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.down.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.down.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.down.3.png",
"ms": 600
}
],
"red_vest": [
{
"src": "img/chr.mom.idle.down__red_vest.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.down__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.down__red_vest.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.down__red_vest.3.png",
"ms": 600
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
"src": "img/chr.mom.idle.left.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.left.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.left.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.left.3.png",
"ms": 600
}
],
"red_vest": [
{
"src": "img/chr.mom.idle.left__red_vest.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.left__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.left__red_vest.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.left__red_vest.3.png",
"ms": 600
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
"src": "img/chr.mom.idle.right.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.right.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.right.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.right.3.png",
"ms": 600
}
],
"red_vest": [
{
"src": "img/chr.mom.idle.right__red_vest.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.right__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.right__red_vest.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.right__red_vest.3.png",
"ms": 600
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
"src": "img/chr.mom.idle.up.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.up.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.up.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.up.3.png",
"ms": 600
}
],
"red_vest": [
{
"src": "img/chr.mom.idle.up__red_vest.0.png",
"ms": 2400
},
{
"src": "img/chr.mom.idle.up__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.idle.up__red_vest.2.png",
"ms": 1200
},
{
"src": "img/chr.mom.idle.up__red_vest.3.png",
"ms": 600
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
"src": "img/chr.mom.talk.down.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.down.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.down.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.down.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.down.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.down.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.down.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.down.7.png",
"ms": 500
}
],
"red_vest": [
{
"src": "img/chr.mom.talk.down__red_vest.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.down__red_vest.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.down__red_vest.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.down__red_vest.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.down__red_vest.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.down__red_vest.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.down__red_vest.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.down__red_vest.7.png",
"ms": 500
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
"src": "img/chr.mom.talk.left.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.left.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.left.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.left.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.left.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.left.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.left.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.left.7.png",
"ms": 500
}
],
"red_vest": [
{
"src": "img/chr.mom.talk.left__red_vest.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.left__red_vest.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.left__red_vest.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.left__red_vest.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.left__red_vest.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.left__red_vest.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.left__red_vest.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.left__red_vest.7.png",
"ms": 500
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
"src": "img/chr.mom.talk.right.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.right.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.right.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.right.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.right.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.right.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.right.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.right.7.png",
"ms": 500
}
],
"red_vest": [
{
"src": "img/chr.mom.talk.right__red_vest.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.right__red_vest.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.right__red_vest.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.right__red_vest.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.right__red_vest.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.right__red_vest.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.right__red_vest.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.right__red_vest.7.png",
"ms": 500
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
"src": "img/chr.mom.talk.up.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.up.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.up.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.up.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.up.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.up.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.up.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.up.7.png",
"ms": 500
}
],
"red_vest": [
{
"src": "img/chr.mom.talk.up__red_vest.0.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.up__red_vest.1.png",
"ms": 180
},
{
"src": "img/chr.mom.talk.up__red_vest.2.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.up__red_vest.3.png",
"ms": 360
},
{
"src": "img/chr.mom.talk.up__red_vest.4.png",
"ms": 220
},
{
"src": "img/chr.mom.talk.up__red_vest.5.png",
"ms": 700
},
{
"src": "img/chr.mom.talk.up__red_vest.6.png",
"ms": 140
},
{
"src": "img/chr.mom.talk.up__red_vest.7.png",
"ms": 500
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
"src": "img/chr.mom.walk.down.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.down.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.down.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.down.3.png",
"ms": 140
}
],
"red_vest": [
{
"src": "img/chr.mom.walk.down__red_vest.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.down__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.down__red_vest.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.down__red_vest.3.png",
"ms": 140
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
"src": "img/chr.mom.walk.left.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.left.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.left.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.left.3.png",
"ms": 140
}
],
"red_vest": [
{
"src": "img/chr.mom.walk.left__red_vest.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.left__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.left__red_vest.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.left__red_vest.3.png",
"ms": 140
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
"src": "img/chr.mom.walk.right.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.right.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.right.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.right.3.png",
"ms": 140
}
],
"red_vest": [
{
"src": "img/chr.mom.walk.right__red_vest.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.right__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.right__red_vest.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.right__red_vest.3.png",
"ms": 140
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
"src": "img/chr.mom.walk.up.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.up.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.up.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.up.3.png",
"ms": 140
}
],
"red_vest": [
{
"src": "img/chr.mom.walk.up__red_vest.0.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.up__red_vest.1.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.up__red_vest.2.png",
"ms": 140
},
{
"src": "img/chr.mom.walk.up__red_vest.3.png",
"ms": 140
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
"src": "img/chr.player.idle.down.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.down.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.down.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.down.3.png",
"ms": 600
}
],
"oilskins": [
{
"src": "img/chr.player.idle.down__oilskins.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.down__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.down__oilskins.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.down__oilskins.3.png",
"ms": 600
}
],
"green_toque": [
{
"src": "img/chr.player.idle.down__green_toque.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.down__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.down__green_toque.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.down__green_toque.3.png",
"ms": 600
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
"src": "history/chr.player.idle.down/v1.png"
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
"src": "img/chr.player.idle.left.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.left.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.left.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.left.3.png",
"ms": 600
}
],
"oilskins": [
{
"src": "img/chr.player.idle.left__oilskins.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.left__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.left__oilskins.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.left__oilskins.3.png",
"ms": 600
}
],
"green_toque": [
{
"src": "img/chr.player.idle.left__green_toque.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.left__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.left__green_toque.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.left__green_toque.3.png",
"ms": 600
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
"src": "img/chr.player.idle.right.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.right.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.right.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.right.3.png",
"ms": 600
}
],
"oilskins": [
{
"src": "img/chr.player.idle.right__oilskins.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.right__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.right__oilskins.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.right__oilskins.3.png",
"ms": 600
}
],
"green_toque": [
{
"src": "img/chr.player.idle.right__green_toque.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.right__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.right__green_toque.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.right__green_toque.3.png",
"ms": 600
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
"src": "img/chr.player.idle.up.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.up.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.up.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.up.3.png",
"ms": 600
}
],
"oilskins": [
{
"src": "img/chr.player.idle.up__oilskins.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.up__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.up__oilskins.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.up__oilskins.3.png",
"ms": 600
}
],
"green_toque": [
{
"src": "img/chr.player.idle.up__green_toque.0.png",
"ms": 2400
},
{
"src": "img/chr.player.idle.up__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.idle.up__green_toque.2.png",
"ms": 1200
},
{
"src": "img/chr.player.idle.up__green_toque.3.png",
"ms": 600
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
"src": "img/chr.player.jig.down.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.down.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.down.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.down.3.png",
"ms": 220
}
],
"oilskins": [
{
"src": "img/chr.player.jig.down__oilskins.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.down__oilskins.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.down__oilskins.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.down__oilskins.3.png",
"ms": 220
}
],
"green_toque": [
{
"src": "img/chr.player.jig.down__green_toque.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.down__green_toque.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.down__green_toque.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.down__green_toque.3.png",
"ms": 220
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
"src": "img/chr.player.jig.left.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.left.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.left.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.left.3.png",
"ms": 220
}
],
"oilskins": [
{
"src": "img/chr.player.jig.left__oilskins.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.left__oilskins.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.left__oilskins.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.left__oilskins.3.png",
"ms": 220
}
],
"green_toque": [
{
"src": "img/chr.player.jig.left__green_toque.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.left__green_toque.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.left__green_toque.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.left__green_toque.3.png",
"ms": 220
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
"src": "img/chr.player.jig.right.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.right.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.right.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.right.3.png",
"ms": 220
}
],
"oilskins": [
{
"src": "img/chr.player.jig.right__oilskins.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.right__oilskins.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.right__oilskins.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.right__oilskins.3.png",
"ms": 220
}
],
"green_toque": [
{
"src": "img/chr.player.jig.right__green_toque.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.right__green_toque.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.right__green_toque.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.right__green_toque.3.png",
"ms": 220
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
"src": "history/chr.player.jig.right/v1.png"
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
"src": "img/chr.player.jig.up.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.up.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.up.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.up.3.png",
"ms": 220
}
],
"oilskins": [
{
"src": "img/chr.player.jig.up__oilskins.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.up__oilskins.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.up__oilskins.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.up__oilskins.3.png",
"ms": 220
}
],
"green_toque": [
{
"src": "img/chr.player.jig.up__green_toque.0.png",
"ms": 260
},
{
"src": "img/chr.player.jig.up__green_toque.1.png",
"ms": 120
},
{
"src": "img/chr.player.jig.up__green_toque.2.png",
"ms": 300
},
{
"src": "img/chr.player.jig.up__green_toque.3.png",
"ms": 220
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
"src": "img/chr.player.walk.down.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down.3.png",
"ms": 140
}
],
"oilskins": [
{
"src": "img/chr.player.walk.down__oilskins.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down__oilskins.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down__oilskins.3.png",
"ms": 140
}
],
"green_toque": [
{
"src": "img/chr.player.walk.down__green_toque.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down__green_toque.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.down__green_toque.3.png",
"ms": 140
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
"src": "history/chr.player.walk.down/v1.png"
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
"src": "img/chr.player.walk.left.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left.3.png",
"ms": 140
}
],
"oilskins": [
{
"src": "img/chr.player.walk.left__oilskins.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left__oilskins.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left__oilskins.3.png",
"ms": 140
}
],
"green_toque": [
{
"src": "img/chr.player.walk.left__green_toque.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left__green_toque.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.left__green_toque.3.png",
"ms": 140
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
"src": "img/chr.player.walk.right.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right.3.png",
"ms": 140
}
],
"oilskins": [
{
"src": "img/chr.player.walk.right__oilskins.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right__oilskins.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right__oilskins.3.png",
"ms": 140
}
],
"green_toque": [
{
"src": "img/chr.player.walk.right__green_toque.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right__green_toque.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.right__green_toque.3.png",
"ms": 140
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
"src": "history/chr.player.walk.right/v1.png"
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
"src": "img/chr.player.walk.up.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up.3.png",
"ms": 140
}
],
"oilskins": [
{
"src": "img/chr.player.walk.up__oilskins.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up__oilskins.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up__oilskins.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up__oilskins.3.png",
"ms": 140
}
],
"green_toque": [
{
"src": "img/chr.player.walk.up__green_toque.0.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up__green_toque.1.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up__green_toque.2.png",
"ms": 140
},
{
"src": "img/chr.player.walk.up__green_toque.3.png",
"ms": 140
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
"src": "img/chr.sibling_f.boat_jig.down.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.down.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.down.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.down.3.png",
"ms": 240
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_jig.down__hair_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.down__hair_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.down__hair_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.down__hair_dark.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_jig.down__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.down__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.down__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.down__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_jig.down__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.down__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.down__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.down__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_jig.down__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.down__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.down__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.down__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_f.boat_jig.left.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.left.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.left.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.left.3.png",
"ms": 240
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_jig.left__hair_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.left__hair_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.left__hair_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.left__hair_dark.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_jig.left__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.left__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.left__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.left__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_jig.left__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.left__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.left__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.left__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_jig.left__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.left__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.left__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.left__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_f.boat_jig.right.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.right.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.right.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.right.3.png",
"ms": 240
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_jig.right__hair_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.right__hair_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.right__hair_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.right__hair_dark.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_jig.right__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.right__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.right__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.right__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_jig.right__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.right__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.right__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.right__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_jig.right__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.right__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.right__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.right__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_f.boat_jig.up.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.up.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.up.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.up.3.png",
"ms": 240
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_jig.up__hair_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.up__hair_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.up__hair_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.up__hair_dark.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_jig.up__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.up__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.up__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.up__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_jig.up__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.up__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.up__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.up__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_jig.up__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_f.boat_jig.up__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_f.boat_jig.up__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_f.boat_jig.up__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_f.boat_pull.down.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down.3.png",
"ms": 170
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_pull.down__hair_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__hair_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__hair_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__hair_dark.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_pull.down__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_pull.down__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_pull.down__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.down__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_f.boat_pull.left.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left.3.png",
"ms": 170
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_pull.left__hair_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__hair_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__hair_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__hair_dark.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_pull.left__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_pull.left__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_pull.left__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.left__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_f.boat_pull.right.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right.3.png",
"ms": 170
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_pull.right__hair_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__hair_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__hair_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__hair_dark.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_pull.right__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_pull.right__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_pull.right__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.right__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_f.boat_pull.up.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up.3.png",
"ms": 170
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_pull.up__hair_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__hair_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__hair_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__hair_dark.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_pull.up__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_pull.up__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_pull.up__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_f.boat_pull.up__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_f.boat_sit.down.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.down.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.down.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.down.3.png",
"ms": 700
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_sit.down__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.down__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.down__hair_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.down__hair_dark.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_sit.down__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.down__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.down__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.down__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_sit.down__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.down__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.down__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.down__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_sit.down__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.down__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.down__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.down__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_f.boat_sit.left.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.left.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.left.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.left.3.png",
"ms": 700
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_sit.left__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.left__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.left__hair_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.left__hair_dark.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_sit.left__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.left__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.left__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.left__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_sit.left__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.left__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.left__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.left__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_sit.left__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.left__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.left__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.left__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_f.boat_sit.right.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.right.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.right.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.right.3.png",
"ms": 700
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_sit.right__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.right__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.right__hair_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.right__hair_dark.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_sit.right__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.right__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.right__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.right__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_sit.right__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.right__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.right__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.right__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_sit.right__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.right__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.right__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.right__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_f.boat_sit.up.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.up.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.up.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.up.3.png",
"ms": 700
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.boat_sit.up__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.up__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.up__hair_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.up__hair_dark.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.boat_sit.up__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.up__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.up__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.up__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.boat_sit.up__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.up__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.up__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.up__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.boat_sit.up__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.boat_sit.up__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.boat_sit.up__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_f.boat_sit.up__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_f.idle.down.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.down.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.down.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.down.3.png",
"ms": 600
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.idle.down__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.down__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.down__hair_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.down__hair_dark.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.idle.down__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.down__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.down__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.down__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.idle.down__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.down__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.down__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.down__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.idle.down__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.down__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.down__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.down__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_f.idle.left.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.left.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.left.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.left.3.png",
"ms": 600
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.idle.left__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.left__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.left__hair_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.left__hair_dark.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.idle.left__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.left__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.left__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.left__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.idle.left__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.left__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.left__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.left__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.idle.left__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.left__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.left__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.left__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_f.idle.right.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.right.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.right.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.right.3.png",
"ms": 600
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.idle.right__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.right__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.right__hair_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.right__hair_dark.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.idle.right__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.right__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.right__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.right__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.idle.right__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.right__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.right__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.right__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.idle.right__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.right__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.right__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.right__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_f.idle.up.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.up.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.up.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.up.3.png",
"ms": 600
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.idle.up__hair_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.up__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.up__hair_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.up__hair_dark.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.idle.up__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.up__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.up__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.up__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.idle.up__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.up__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.up__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.up__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.idle.up__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_f.idle.up__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.idle.up__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_f.idle.up__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_f.walk.down.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down.3.png",
"ms": 140
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.walk.down__hair_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__hair_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__hair_dark.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.walk.down__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.walk.down__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.walk.down__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.down__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.sibling_f.walk.left.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left.3.png",
"ms": 140
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.walk.left__hair_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__hair_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__hair_dark.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.walk.left__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.walk.left__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.walk.left__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.left__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.sibling_f.walk.right.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right.3.png",
"ms": 140
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.walk.right__hair_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__hair_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__hair_dark.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.walk.right__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.walk.right__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.walk.right__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.right__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.sibling_f.walk.up.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up.3.png",
"ms": 140
}
],
"hair_dark": [
{
"src": "img/chr.sibling_f.walk.up__hair_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__hair_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__hair_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__hair_dark.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_f.walk.up__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_f.walk.up__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_f.walk.up__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_f.walk.up__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.sibling_m.boat_jig.down.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.down.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.down.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.down.3.png",
"ms": 240
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_jig.down__hair_brown.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.down__hair_brown.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.down__hair_brown.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.down__hair_brown.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_jig.down__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.down__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.down__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.down__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_jig.down__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.down__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.down__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.down__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_jig.down__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.down__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.down__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.down__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_m.boat_jig.left.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.left.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.left.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.left.3.png",
"ms": 240
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_jig.left__hair_brown.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.left__hair_brown.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.left__hair_brown.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.left__hair_brown.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_jig.left__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.left__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.left__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.left__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_jig.left__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.left__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.left__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.left__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_jig.left__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.left__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.left__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.left__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_m.boat_jig.right.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.right.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.right.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.right.3.png",
"ms": 240
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_jig.right__hair_brown.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.right__hair_brown.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.right__hair_brown.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.right__hair_brown.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_jig.right__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.right__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.right__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.right__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_jig.right__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.right__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.right__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.right__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_jig.right__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.right__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.right__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.right__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_m.boat_jig.up.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.up.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.up.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.up.3.png",
"ms": 240
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_jig.up__hair_brown.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.up__hair_brown.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.up__hair_brown.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.up__hair_brown.3.png",
"ms": 240
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_jig.up__hair_red.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.up__hair_red.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.up__hair_red.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.up__hair_red.3.png",
"ms": 240
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_jig.up__skin_deep.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.up__skin_deep.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.up__skin_deep.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.up__skin_deep.3.png",
"ms": 240
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_jig.up__skin_dark.0.png",
"ms": 300
},
{
"src": "img/chr.sibling_m.boat_jig.up__skin_dark.1.png",
"ms": 120
},
{
"src": "img/chr.sibling_m.boat_jig.up__skin_dark.2.png",
"ms": 320
},
{
"src": "img/chr.sibling_m.boat_jig.up__skin_dark.3.png",
"ms": 240
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
"src": "img/chr.sibling_m.boat_pull.down.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down.3.png",
"ms": 170
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_pull.down__hair_brown.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__hair_brown.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__hair_brown.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__hair_brown.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_pull.down__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_pull.down__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_pull.down__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.down__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_m.boat_pull.left.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left.3.png",
"ms": 170
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_pull.left__hair_brown.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__hair_brown.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__hair_brown.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__hair_brown.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_pull.left__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_pull.left__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_pull.left__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.left__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_m.boat_pull.right.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right.3.png",
"ms": 170
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_pull.right__hair_brown.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__hair_brown.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__hair_brown.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__hair_brown.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_pull.right__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_pull.right__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_pull.right__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.right__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_m.boat_pull.up.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up.3.png",
"ms": 170
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_pull.up__hair_brown.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__hair_brown.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__hair_brown.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__hair_brown.3.png",
"ms": 170
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_pull.up__hair_red.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__hair_red.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__hair_red.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__hair_red.3.png",
"ms": 170
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_pull.up__skin_deep.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__skin_deep.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__skin_deep.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__skin_deep.3.png",
"ms": 170
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_pull.up__skin_dark.0.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__skin_dark.1.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__skin_dark.2.png",
"ms": 170
},
{
"src": "img/chr.sibling_m.boat_pull.up__skin_dark.3.png",
"ms": 170
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
"src": "img/chr.sibling_m.boat_sit.down.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.down.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.down.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.down.3.png",
"ms": 700
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_sit.down__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.down__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.down__hair_brown.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.down__hair_brown.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_sit.down__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.down__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.down__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.down__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_sit.down__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.down__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.down__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.down__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_sit.down__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.down__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.down__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.down__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_m.boat_sit.left.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.left.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.left.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.left.3.png",
"ms": 700
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_sit.left__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.left__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.left__hair_brown.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.left__hair_brown.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_sit.left__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.left__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.left__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.left__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_sit.left__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.left__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.left__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.left__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_sit.left__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.left__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.left__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.left__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_m.boat_sit.right.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.right.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.right.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.right.3.png",
"ms": 700
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_sit.right__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.right__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.right__hair_brown.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.right__hair_brown.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_sit.right__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.right__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.right__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.right__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_sit.right__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.right__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.right__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.right__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_sit.right__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.right__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.right__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.right__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_m.boat_sit.up.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.up.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.up.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.up.3.png",
"ms": 700
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.boat_sit.up__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.up__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.up__hair_brown.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.up__hair_brown.3.png",
"ms": 700
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.boat_sit.up__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.up__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.up__hair_red.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.up__hair_red.3.png",
"ms": 700
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.boat_sit.up__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.up__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.up__skin_deep.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.up__skin_deep.3.png",
"ms": 700
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.boat_sit.up__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.boat_sit.up__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.boat_sit.up__skin_dark.2.png",
"ms": 1400
},
{
"src": "img/chr.sibling_m.boat_sit.up__skin_dark.3.png",
"ms": 700
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
"src": "img/chr.sibling_m.idle.down.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.down.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.down.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.down.3.png",
"ms": 600
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.idle.down__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.down__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.down__hair_brown.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.down__hair_brown.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.idle.down__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.down__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.down__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.down__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.idle.down__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.down__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.down__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.down__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.idle.down__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.down__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.down__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.down__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_m.idle.left.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.left.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.left.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.left.3.png",
"ms": 600
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.idle.left__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.left__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.left__hair_brown.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.left__hair_brown.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.idle.left__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.left__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.left__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.left__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.idle.left__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.left__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.left__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.left__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.idle.left__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.left__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.left__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.left__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_m.idle.right.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.right.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.right.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.right.3.png",
"ms": 600
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.idle.right__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.right__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.right__hair_brown.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.right__hair_brown.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.idle.right__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.right__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.right__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.right__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.idle.right__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.right__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.right__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.right__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.idle.right__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.right__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.right__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.right__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_m.idle.up.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.up.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.up.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.up.3.png",
"ms": 600
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.idle.up__hair_brown.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.up__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.up__hair_brown.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.up__hair_brown.3.png",
"ms": 600
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.idle.up__hair_red.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.up__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.up__hair_red.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.up__hair_red.3.png",
"ms": 600
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.idle.up__skin_deep.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.up__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.up__skin_deep.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.up__skin_deep.3.png",
"ms": 600
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.idle.up__skin_dark.0.png",
"ms": 2400
},
{
"src": "img/chr.sibling_m.idle.up__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.idle.up__skin_dark.2.png",
"ms": 1200
},
{
"src": "img/chr.sibling_m.idle.up__skin_dark.3.png",
"ms": 600
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
"src": "img/chr.sibling_m.walk.down.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down.3.png",
"ms": 140
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.walk.down__hair_brown.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__hair_brown.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__hair_brown.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.walk.down__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.walk.down__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.walk.down__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.down__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.sibling_m.walk.left.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left.3.png",
"ms": 140
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.walk.left__hair_brown.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__hair_brown.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__hair_brown.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.walk.left__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.walk.left__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.walk.left__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.left__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.sibling_m.walk.right.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right.3.png",
"ms": 140
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.walk.right__hair_brown.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__hair_brown.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__hair_brown.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.walk.right__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.walk.right__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.walk.right__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.right__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.sibling_m.walk.up.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up.3.png",
"ms": 140
}
],
"hair_brown": [
{
"src": "img/chr.sibling_m.walk.up__hair_brown.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__hair_brown.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__hair_brown.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__hair_brown.3.png",
"ms": 140
}
],
"hair_red": [
{
"src": "img/chr.sibling_m.walk.up__hair_red.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__hair_red.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__hair_red.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__hair_red.3.png",
"ms": 140
}
],
"skin_deep": [
{
"src": "img/chr.sibling_m.walk.up__skin_deep.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__skin_deep.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__skin_deep.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__skin_deep.3.png",
"ms": 140
}
],
"skin_dark": [
{
"src": "img/chr.sibling_m.walk.up__skin_dark.0.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__skin_dark.1.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__skin_dark.2.png",
"ms": 140
},
{
"src": "img/chr.sibling_m.walk.up__skin_dark.3.png",
"ms": 140
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
"src": "img/chr.youth.idle.down.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.down.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.down.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.down.3.png",
"ms": 600
}
],
"red_hoodie": [
{
"src": "img/chr.youth.idle.down__red_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.down__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.down__red_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.down__red_hoodie.3.png",
"ms": 600
}
],
"green_hoodie": [
{
"src": "img/chr.youth.idle.down__green_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.down__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.down__green_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.down__green_hoodie.3.png",
"ms": 600
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
"src": "img/chr.youth.idle.left.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.left.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.left.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.left.3.png",
"ms": 600
}
],
"red_hoodie": [
{
"src": "img/chr.youth.idle.left__red_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.left__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.left__red_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.left__red_hoodie.3.png",
"ms": 600
}
],
"green_hoodie": [
{
"src": "img/chr.youth.idle.left__green_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.left__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.left__green_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.left__green_hoodie.3.png",
"ms": 600
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
"src": "img/chr.youth.idle.right.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.right.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.right.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.right.3.png",
"ms": 600
}
],
"red_hoodie": [
{
"src": "img/chr.youth.idle.right__red_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.right__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.right__red_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.right__red_hoodie.3.png",
"ms": 600
}
],
"green_hoodie": [
{
"src": "img/chr.youth.idle.right__green_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.right__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.right__green_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.right__green_hoodie.3.png",
"ms": 600
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
"src": "img/chr.youth.idle.up.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.up.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.up.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.up.3.png",
"ms": 600
}
],
"red_hoodie": [
{
"src": "img/chr.youth.idle.up__red_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.up__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.up__red_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.up__red_hoodie.3.png",
"ms": 600
}
],
"green_hoodie": [
{
"src": "img/chr.youth.idle.up__green_hoodie.0.png",
"ms": 2400
},
{
"src": "img/chr.youth.idle.up__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.idle.up__green_hoodie.2.png",
"ms": 1200
},
{
"src": "img/chr.youth.idle.up__green_hoodie.3.png",
"ms": 600
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
"src": "img/chr.youth.phone.down.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.down.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.down.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.down.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.down.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.down.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.down.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.down.7.png",
"ms": 500
}
],
"red_hoodie": [
{
"src": "img/chr.youth.phone.down__red_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.down__red_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.down__red_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.down__red_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.down__red_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.down__red_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.down__red_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.down__red_hoodie.7.png",
"ms": 500
}
],
"green_hoodie": [
{
"src": "img/chr.youth.phone.down__green_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.down__green_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.down__green_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.down__green_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.down__green_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.down__green_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.down__green_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.down__green_hoodie.7.png",
"ms": 500
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
"src": "img/chr.youth.phone.left.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.left.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.left.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.left.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.left.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.left.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.left.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.left.7.png",
"ms": 500
}
],
"red_hoodie": [
{
"src": "img/chr.youth.phone.left__red_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.left__red_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.left__red_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.left__red_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.left__red_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.left__red_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.left__red_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.left__red_hoodie.7.png",
"ms": 500
}
],
"green_hoodie": [
{
"src": "img/chr.youth.phone.left__green_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.left__green_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.left__green_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.left__green_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.left__green_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.left__green_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.left__green_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.left__green_hoodie.7.png",
"ms": 500
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
"src": "img/chr.youth.phone.right.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.right.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.right.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.right.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.right.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.right.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.right.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.right.7.png",
"ms": 500
}
],
"red_hoodie": [
{
"src": "img/chr.youth.phone.right__red_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.right__red_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.right__red_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.right__red_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.right__red_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.right__red_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.right__red_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.right__red_hoodie.7.png",
"ms": 500
}
],
"green_hoodie": [
{
"src": "img/chr.youth.phone.right__green_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.right__green_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.right__green_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.right__green_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.right__green_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.right__green_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.right__green_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.right__green_hoodie.7.png",
"ms": 500
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
"src": "img/chr.youth.phone.up.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.up.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.up.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.up.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.up.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.up.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.up.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.up.7.png",
"ms": 500
}
],
"red_hoodie": [
{
"src": "img/chr.youth.phone.up__red_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.up__red_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.up__red_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.up__red_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.up__red_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.up__red_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.up__red_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.up__red_hoodie.7.png",
"ms": 500
}
],
"green_hoodie": [
{
"src": "img/chr.youth.phone.up__green_hoodie.0.png",
"ms": 900
},
{
"src": "img/chr.youth.phone.up__green_hoodie.1.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.up__green_hoodie.2.png",
"ms": 260
},
{
"src": "img/chr.youth.phone.up__green_hoodie.3.png",
"ms": 110
},
{
"src": "img/chr.youth.phone.up__green_hoodie.4.png",
"ms": 1400
},
{
"src": "img/chr.youth.phone.up__green_hoodie.5.png",
"ms": 140
},
{
"src": "img/chr.youth.phone.up__green_hoodie.6.png",
"ms": 700
},
{
"src": "img/chr.youth.phone.up__green_hoodie.7.png",
"ms": 500
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
"src": "img/chr.youth.walk.down.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down.3.png",
"ms": 140
}
],
"red_hoodie": [
{
"src": "img/chr.youth.walk.down__red_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down__red_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down__red_hoodie.3.png",
"ms": 140
}
],
"green_hoodie": [
{
"src": "img/chr.youth.walk.down__green_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down__green_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.down__green_hoodie.3.png",
"ms": 140
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
"src": "img/chr.youth.walk.left.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left.3.png",
"ms": 140
}
],
"red_hoodie": [
{
"src": "img/chr.youth.walk.left__red_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left__red_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left__red_hoodie.3.png",
"ms": 140
}
],
"green_hoodie": [
{
"src": "img/chr.youth.walk.left__green_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left__green_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.left__green_hoodie.3.png",
"ms": 140
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
"src": "img/chr.youth.walk.right.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right.3.png",
"ms": 140
}
],
"red_hoodie": [
{
"src": "img/chr.youth.walk.right__red_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right__red_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right__red_hoodie.3.png",
"ms": 140
}
],
"green_hoodie": [
{
"src": "img/chr.youth.walk.right__green_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right__green_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.right__green_hoodie.3.png",
"ms": 140
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
"src": "img/chr.youth.walk.up.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up.3.png",
"ms": 140
}
],
"red_hoodie": [
{
"src": "img/chr.youth.walk.up__red_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up__red_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up__red_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up__red_hoodie.3.png",
"ms": 140
}
],
"green_hoodie": [
{
"src": "img/chr.youth.walk.up__green_hoodie.0.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up__green_hoodie.1.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up__green_hoodie.2.png",
"ms": 140
},
{
"src": "img/chr.youth.walk.up__green_hoodie.3.png",
"ms": 140
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
"src": "img/tile.lazybed.0.png",
"ms": 0
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
"src": "history/tile.lazybed/v1.png"
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
"src": "img/tile.wharf_deck.0.png",
"ms": 0
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
"src": "history/tile.wharf_deck/v1.png"
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
"src": "img/tile.wharf_deck_edge_s.0.png",
"ms": 0
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
"src": "history/tile.wharf_deck_edge_s/v1.png"
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
"src": "img/ani.dog.idle.down.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.down.1.png",
"ms": 140
},
{
"src": "img/ani.dog.idle.down.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.down.3.png",
"ms": 240
}
],
"brown": [
{
"src": "img/ani.dog.idle.down__brown.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.down__brown.1.png",
"ms": 140
},
{
"src": "img/ani.dog.idle.down__brown.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.down__brown.3.png",
"ms": 240
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
"src": "img/ani.dog.idle.left.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.left.1.png",
"ms": 140
},
{
"src": "img/ani.dog.idle.left.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.left.3.png",
"ms": 240
}
],
"brown": [
{
"src": "img/ani.dog.idle.left__brown.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.left__brown.1.png",
"ms": 140
},
{
"src": "img/ani.dog.idle.left__brown.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.left__brown.3.png",
"ms": 240
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
"src": "img/ani.dog.idle.right.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.right.1.png",
"ms": 140
},
{
"src": "img/ani.dog.idle.right.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.right.3.png",
"ms": 240
}
],
"brown": [
{
"src": "img/ani.dog.idle.right__brown.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.right__brown.1.png",
"ms": 140
},
{
"src": "img/ani.dog.idle.right__brown.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.right__brown.3.png",
"ms": 240
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
"src": "img/ani.dog.idle.up.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.up.1.png",
"ms": 160
},
{
"src": "img/ani.dog.idle.up.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.up.3.png",
"ms": 240
}
],
"brown": [
{
"src": "img/ani.dog.idle.up__brown.0.png",
"ms": 1600
},
{
"src": "img/ani.dog.idle.up__brown.1.png",
"ms": 160
},
{
"src": "img/ani.dog.idle.up__brown.2.png",
"ms": 900
},
{
"src": "img/ani.dog.idle.up__brown.3.png",
"ms": 240
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
"src": "img/ani.dog.sit.down.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.down.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.down.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.down.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.down.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.down.5.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit.down__brown.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.down__brown.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.down__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.down__brown.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.down__brown.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.down__brown.5.png",
"ms": 150
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
"src": "img/ani.dog.sit.left.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.left.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.left.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.left.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.left.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.left.5.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit.left__brown.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.left__brown.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.left__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.left__brown.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.left__brown.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.left__brown.5.png",
"ms": 150
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
"src": "img/ani.dog.sit.right.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.right.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.right.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.right.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.right.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.right.5.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit.right__brown.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.right__brown.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.right__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.right__brown.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.right__brown.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.right__brown.5.png",
"ms": 150
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
"src": "img/ani.dog.sit.up.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.up.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.up.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.up.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.up.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.up.5.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit.up__brown.0.png",
"ms": 160
},
{
"src": "img/ani.dog.sit.up__brown.1.png",
"ms": 260
},
{
"src": "img/ani.dog.sit.up__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.up__brown.3.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.up__brown.4.png",
"ms": 150
},
{
"src": "img/ani.dog.sit.up__brown.5.png",
"ms": 150
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
"src": "img/ani.dog.sit_idle.down.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.down.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.down.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.down.3.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit_idle.down__brown.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.down__brown.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.down__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.down__brown.3.png",
"ms": 150
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
"src": "img/ani.dog.sit_idle.left.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.left.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.left.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.left.3.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit_idle.left__brown.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.left__brown.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.left__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.left__brown.3.png",
"ms": 150
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
"src": "img/ani.dog.sit_idle.right.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.right.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.right.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.right.3.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit_idle.right__brown.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.right__brown.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.right__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.right__brown.3.png",
"ms": 150
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
"src": "img/ani.dog.sit_idle.up.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.up.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.up.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.up.3.png",
"ms": 150
}
],
"brown": [
{
"src": "img/ani.dog.sit_idle.up__brown.0.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.up__brown.1.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.up__brown.2.png",
"ms": 150
},
{
"src": "img/ani.dog.sit_idle.up__brown.3.png",
"ms": 150
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
"src": "img/ani.dog.walk.down.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.down.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.down.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.down.3.png",
"ms": 130
}
],
"brown": [
{
"src": "img/ani.dog.walk.down__brown.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.down__brown.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.down__brown.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.down__brown.3.png",
"ms": 130
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
"src": "img/ani.dog.walk.left.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.left.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.left.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.left.3.png",
"ms": 130
}
],
"brown": [
{
"src": "img/ani.dog.walk.left__brown.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.left__brown.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.left__brown.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.left__brown.3.png",
"ms": 130
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
"src": "img/ani.dog.walk.right.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.right.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.right.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.right.3.png",
"ms": 130
}
],
"brown": [
{
"src": "img/ani.dog.walk.right__brown.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.right__brown.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.right__brown.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.right__brown.3.png",
"ms": 130
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
"src": "img/ani.dog.walk.up.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.up.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.up.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.up.3.png",
"ms": 130
}
],
"brown": [
{
"src": "img/ani.dog.walk.up__brown.0.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.up__brown.1.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.up__brown.2.png",
"ms": 130
},
{
"src": "img/ani.dog.walk.up__brown.3.png",
"ms": 130
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
"src": "img/ani.gull.fly.down.0.png",
"ms": 110
},
{
"src": "img/ani.gull.fly.down.1.png",
"ms": 80
},
{
"src": "img/ani.gull.fly.down.2.png",
"ms": 120
},
{
"src": "img/ani.gull.fly.down.3.png",
"ms": 90
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
"src": "img/ani.gull.fly.left.0.png",
"ms": 110
},
{
"src": "img/ani.gull.fly.left.1.png",
"ms": 80
},
{
"src": "img/ani.gull.fly.left.2.png",
"ms": 80
},
{
"src": "img/ani.gull.fly.left.3.png",
"ms": 120
},
{
"src": "img/ani.gull.fly.left.4.png",
"ms": 90
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
"src": "img/ani.gull.fly.right.0.png",
"ms": 110
},
{
"src": "img/ani.gull.fly.right.1.png",
"ms": 80
},
{
"src": "img/ani.gull.fly.right.2.png",
"ms": 80
},
{
"src": "img/ani.gull.fly.right.3.png",
"ms": 120
},
{
"src": "img/ani.gull.fly.right.4.png",
"ms": 90
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
"src": "img/ani.gull.fly.up.0.png",
"ms": 110
},
{
"src": "img/ani.gull.fly.up.1.png",
"ms": 80
},
{
"src": "img/ani.gull.fly.up.2.png",
"ms": 120
},
{
"src": "img/ani.gull.fly.up.3.png",
"ms": 90
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
"src": "img/ani.gull.glide.left.0.png",
"ms": 650
},
{
"src": "img/ani.gull.glide.left.1.png",
"ms": 650
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
"src": "img/ani.gull.glide.right.0.png",
"ms": 650
},
{
"src": "img/ani.gull.glide.right.1.png",
"ms": 650
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
"src": "img/ani.gull.idle.down.0.png",
"ms": 1600
},
{
"src": "img/ani.gull.idle.down.1.png",
"ms": 110
},
{
"src": "img/ani.gull.idle.down.2.png",
"ms": 900
},
{
"src": "img/ani.gull.idle.down.3.png",
"ms": 1100
},
{
"src": "img/ani.gull.idle.down.4.png",
"ms": 700
},
{
"src": "img/ani.gull.idle.down.5.png",
"ms": 110
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
"src": "img/ani.gull.idle.left.0.png",
"ms": 1600
},
{
"src": "img/ani.gull.idle.left.1.png",
"ms": 110
},
{
"src": "img/ani.gull.idle.left.2.png",
"ms": 900
},
{
"src": "img/ani.gull.idle.left.3.png",
"ms": 1100
},
{
"src": "img/ani.gull.idle.left.4.png",
"ms": 700
},
{
"src": "img/ani.gull.idle.left.5.png",
"ms": 110
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
"src": "img/ani.gull.idle.right.0.png",
"ms": 1600
},
{
"src": "img/ani.gull.idle.right.1.png",
"ms": 110
},
{
"src": "img/ani.gull.idle.right.2.png",
"ms": 900
},
{
"src": "img/ani.gull.idle.right.3.png",
"ms": 1100
},
{
"src": "img/ani.gull.idle.right.4.png",
"ms": 700
},
{
"src": "img/ani.gull.idle.right.5.png",
"ms": 110
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
"src": "img/ani.gull.idle.up.0.png",
"ms": 1800
},
{
"src": "img/ani.gull.idle.up.1.png",
"ms": 1000
},
{
"src": "img/ani.gull.idle.up.2.png",
"ms": 1200
},
{
"src": "img/ani.gull.idle.up.3.png",
"ms": 600
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
"src": "img/ani.gull.squawk.down.0.png",
"ms": 240
},
{
"src": "img/ani.gull.squawk.down.1.png",
"ms": 140
},
{
"src": "img/ani.gull.squawk.down.2.png",
"ms": 620
},
{
"src": "img/ani.gull.squawk.down.3.png",
"ms": 180
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
"src": "img/ani.gull.squawk.left.0.png",
"ms": 240
},
{
"src": "img/ani.gull.squawk.left.1.png",
"ms": 140
},
{
"src": "img/ani.gull.squawk.left.2.png",
"ms": 620
},
{
"src": "img/ani.gull.squawk.left.3.png",
"ms": 180
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
"src": "img/ani.gull.squawk.right.0.png",
"ms": 240
},
{
"src": "img/ani.gull.squawk.right.1.png",
"ms": 140
},
{
"src": "img/ani.gull.squawk.right.2.png",
"ms": 620
},
{
"src": "img/ani.gull.squawk.right.3.png",
"ms": 180
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
"src": "img/ani.gull.squawk.up.0.png",
"ms": 240
},
{
"src": "img/ani.gull.squawk.up.1.png",
"ms": 140
},
{
"src": "img/ani.gull.squawk.up.2.png",
"ms": 620
},
{
"src": "img/ani.gull.squawk.up.3.png",
"ms": 180
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
"src": "img/ani.gull.walk.down.0.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.down.1.png",
"ms": 120
},
{
"src": "img/ani.gull.walk.down.2.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.down.3.png",
"ms": 120
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
"src": "img/ani.gull.walk.left.0.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.left.1.png",
"ms": 130
},
{
"src": "img/ani.gull.walk.left.2.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.left.3.png",
"ms": 130
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
"src": "img/ani.gull.walk.right.0.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.right.1.png",
"ms": 130
},
{
"src": "img/ani.gull.walk.right.2.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.right.3.png",
"ms": 130
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
"src": "img/ani.gull.walk.up.0.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.up.1.png",
"ms": 120
},
{
"src": "img/ani.gull.walk.up.2.png",
"ms": 150
},
{
"src": "img/ani.gull.walk.up.3.png",
"ms": 120
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
"src": "img/ani.hen.idle.down.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.down.1.png",
"ms": 120
},
{
"src": "img/ani.hen.idle.down.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.down.3.png",
"ms": 280
}
],
"white": [
{
"src": "img/ani.hen.idle.down__white.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.down__white.1.png",
"ms": 120
},
{
"src": "img/ani.hen.idle.down__white.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.down__white.3.png",
"ms": 280
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
"src": "img/ani.hen.idle.left.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.left.1.png",
"ms": 120
},
{
"src": "img/ani.hen.idle.left.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.left.3.png",
"ms": 280
}
],
"white": [
{
"src": "img/ani.hen.idle.left__white.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.left__white.1.png",
"ms": 120
},
{
"src": "img/ani.hen.idle.left__white.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.left__white.3.png",
"ms": 280
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
"src": "img/ani.hen.idle.right.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.right.1.png",
"ms": 120
},
{
"src": "img/ani.hen.idle.right.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.right.3.png",
"ms": 280
}
],
"white": [
{
"src": "img/ani.hen.idle.right__white.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.right__white.1.png",
"ms": 120
},
{
"src": "img/ani.hen.idle.right__white.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.right__white.3.png",
"ms": 280
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
"src": "img/ani.hen.idle.up.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.up.1.png",
"ms": 280
},
{
"src": "img/ani.hen.idle.up.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.up.3.png",
"ms": 220
}
],
"white": [
{
"src": "img/ani.hen.idle.up__white.0.png",
"ms": 1500
},
{
"src": "img/ani.hen.idle.up__white.1.png",
"ms": 280
},
{
"src": "img/ani.hen.idle.up__white.2.png",
"ms": 900
},
{
"src": "img/ani.hen.idle.up__white.3.png",
"ms": 220
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
"src": "img/ani.hen.peck.down.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.down.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.down.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.down.3.png",
"ms": 70
}
],
"white": [
{
"src": "img/ani.hen.peck.down__white.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.down__white.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.down__white.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.down__white.3.png",
"ms": 70
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
"src": "img/ani.hen.peck.left.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.left.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.left.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.left.3.png",
"ms": 70
}
],
"white": [
{
"src": "img/ani.hen.peck.left__white.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.left__white.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.left__white.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.left__white.3.png",
"ms": 70
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
"src": "img/ani.hen.peck.right.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.right.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.right.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.right.3.png",
"ms": 70
}
],
"white": [
{
"src": "img/ani.hen.peck.right__white.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.right__white.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.right__white.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.right__white.3.png",
"ms": 70
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
"src": "img/ani.hen.peck.up.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.up.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.up.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.up.3.png",
"ms": 70
}
],
"white": [
{
"src": "img/ani.hen.peck.up__white.0.png",
"ms": 260
},
{
"src": "img/ani.hen.peck.up__white.1.png",
"ms": 70
},
{
"src": "img/ani.hen.peck.up__white.2.png",
"ms": 120
},
{
"src": "img/ani.hen.peck.up__white.3.png",
"ms": 70
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
"src": "img/ani.hen.walk.down.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.down.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.down.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.down.3.png",
"ms": 130
}
],
"white": [
{
"src": "img/ani.hen.walk.down__white.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.down__white.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.down__white.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.down__white.3.png",
"ms": 130
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
"src": "img/ani.hen.walk.left.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.left.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.left.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.left.3.png",
"ms": 130
}
],
"white": [
{
"src": "img/ani.hen.walk.left__white.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.left__white.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.left__white.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.left__white.3.png",
"ms": 130
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
"src": "img/ani.hen.walk.right.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.right.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.right.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.right.3.png",
"ms": 130
}
],
"white": [
{
"src": "img/ani.hen.walk.right__white.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.right__white.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.right__white.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.right__white.3.png",
"ms": 130
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
"src": "img/ani.hen.walk.up.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.up.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.up.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.up.3.png",
"ms": 130
}
],
"white": [
{
"src": "img/ani.hen.walk.up__white.0.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.up__white.1.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.up__white.2.png",
"ms": 130
},
{
"src": "img/ani.hen.walk.up__white.3.png",
"ms": 130
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
"src": "img/ani.puffin.fish.down.0.png",
"ms": 900
},
{
"src": "img/ani.puffin.fish.down.1.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.down.2.png",
"ms": 500
},
{
"src": "img/ani.puffin.fish.down.3.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.down.4.png",
"ms": 700
},
{
"src": "img/ani.puffin.fish.down.5.png",
"ms": 110
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
"src": "img/ani.puffin.fish.left.0.png",
"ms": 900
},
{
"src": "img/ani.puffin.fish.left.1.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.left.2.png",
"ms": 500
},
{
"src": "img/ani.puffin.fish.left.3.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.left.4.png",
"ms": 700
},
{
"src": "img/ani.puffin.fish.left.5.png",
"ms": 110
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
"src": "img/ani.puffin.fish.right.0.png",
"ms": 900
},
{
"src": "img/ani.puffin.fish.right.1.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.right.2.png",
"ms": 500
},
{
"src": "img/ani.puffin.fish.right.3.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.right.4.png",
"ms": 700
},
{
"src": "img/ani.puffin.fish.right.5.png",
"ms": 110
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
"src": "img/ani.puffin.fish.up.0.png",
"ms": 900
},
{
"src": "img/ani.puffin.fish.up.1.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.up.2.png",
"ms": 500
},
{
"src": "img/ani.puffin.fish.up.3.png",
"ms": 150
},
{
"src": "img/ani.puffin.fish.up.4.png",
"ms": 800
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
"src": "img/ani.puffin.fly.left.0.png",
"ms": 75
},
{
"src": "img/ani.puffin.fly.left.1.png",
"ms": 70
},
{
"src": "img/ani.puffin.fly.left.2.png",
"ms": 80
},
{
"src": "img/ani.puffin.fly.left.3.png",
"ms": 70
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
"src": "img/ani.puffin.fly.right.0.png",
"ms": 75
},
{
"src": "img/ani.puffin.fly.right.1.png",
"ms": 70
},
{
"src": "img/ani.puffin.fly.right.2.png",
"ms": 80
},
{
"src": "img/ani.puffin.fly.right.3.png",
"ms": 70
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
"src": "img/ani.puffin.idle.down.0.png",
"ms": 1400
},
{
"src": "img/ani.puffin.idle.down.1.png",
"ms": 110
},
{
"src": "img/ani.puffin.idle.down.2.png",
"ms": 500
},
{
"src": "img/ani.puffin.idle.down.3.png",
"ms": 160
},
{
"src": "img/ani.puffin.idle.down.4.png",
"ms": 900
},
{
"src": "img/ani.puffin.idle.down.5.png",
"ms": 160
},
{
"src": "img/ani.puffin.idle.down.6.png",
"ms": 110
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
"src": "img/ani.puffin.idle.left.0.png",
"ms": 1400
},
{
"src": "img/ani.puffin.idle.left.1.png",
"ms": 110
},
{
"src": "img/ani.puffin.idle.left.2.png",
"ms": 500
},
{
"src": "img/ani.puffin.idle.left.3.png",
"ms": 160
},
{
"src": "img/ani.puffin.idle.left.4.png",
"ms": 900
},
{
"src": "img/ani.puffin.idle.left.5.png",
"ms": 160
},
{
"src": "img/ani.puffin.idle.left.6.png",
"ms": 110
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
"src": "img/ani.puffin.idle.right.0.png",
"ms": 1400
},
{
"src": "img/ani.puffin.idle.right.1.png",
"ms": 110
},
{
"src": "img/ani.puffin.idle.right.2.png",
"ms": 500
},
{
"src": "img/ani.puffin.idle.right.3.png",
"ms": 160
},
{
"src": "img/ani.puffin.idle.right.4.png",
"ms": 900
},
{
"src": "img/ani.puffin.idle.right.5.png",
"ms": 160
},
{
"src": "img/ani.puffin.idle.right.6.png",
"ms": 110
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
"src": "img/ani.puffin.idle.up.0.png",
"ms": 1400
},
{
"src": "img/ani.puffin.idle.up.1.png",
"ms": 160
},
{
"src": "img/ani.puffin.idle.up.2.png",
"ms": 900
},
{
"src": "img/ani.puffin.idle.up.3.png",
"ms": 400
},
{
"src": "img/ani.puffin.idle.up.4.png",
"ms": 700
},
{
"src": "img/ani.puffin.idle.up.5.png",
"ms": 160
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
"src": "img/ani.puffin.walk.down.0.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.down.1.png",
"ms": 110
},
{
"src": "img/ani.puffin.walk.down.2.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.down.3.png",
"ms": 110
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
"src": "img/ani.puffin.walk.left.0.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.left.1.png",
"ms": 110
},
{
"src": "img/ani.puffin.walk.left.2.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.left.3.png",
"ms": 110
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
"src": "img/ani.puffin.walk.right.0.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.right.1.png",
"ms": 110
},
{
"src": "img/ani.puffin.walk.right.2.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.right.3.png",
"ms": 110
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
"src": "img/ani.puffin.walk.up.0.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.up.1.png",
"ms": 110
},
{
"src": "img/ani.puffin.walk.up.2.png",
"ms": 120
},
{
"src": "img/ani.puffin.walk.up.3.png",
"ms": 110
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
"src": "img/ani.sheep.graze.down.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.down.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.down.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.down.3.png",
"ms": 160
}
],
"dark": [
{
"src": "img/ani.sheep.graze.down__dark.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.down__dark.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.down__dark.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.down__dark.3.png",
"ms": 160
}
],
"brown": [
{
"src": "img/ani.sheep.graze.down__brown.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.down__brown.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.down__brown.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.down__brown.3.png",
"ms": 160
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
"src": "img/ani.sheep.graze.left.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.left.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.left.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.left.3.png",
"ms": 160
}
],
"dark": [
{
"src": "img/ani.sheep.graze.left__dark.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.left__dark.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.left__dark.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.left__dark.3.png",
"ms": 160
}
],
"brown": [
{
"src": "img/ani.sheep.graze.left__brown.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.left__brown.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.left__brown.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.left__brown.3.png",
"ms": 160
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
"src": "img/ani.sheep.graze.right.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.right.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.right.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.right.3.png",
"ms": 160
}
],
"dark": [
{
"src": "img/ani.sheep.graze.right__dark.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.right__dark.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.right__dark.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.right__dark.3.png",
"ms": 160
}
],
"brown": [
{
"src": "img/ani.sheep.graze.right__brown.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.right__brown.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.right__brown.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.right__brown.3.png",
"ms": 160
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
"src": "img/ani.sheep.graze.up.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.up.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.up.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.up.3.png",
"ms": 160
}
],
"dark": [
{
"src": "img/ani.sheep.graze.up__dark.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.up__dark.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.up__dark.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.up__dark.3.png",
"ms": 160
}
],
"brown": [
{
"src": "img/ani.sheep.graze.up__brown.0.png",
"ms": 420
},
{
"src": "img/ani.sheep.graze.up__brown.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.graze.up__brown.2.png",
"ms": 180
},
{
"src": "img/ani.sheep.graze.up__brown.3.png",
"ms": 160
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
"src": "img/ani.sheep.idle.down.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.down.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.down.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.down.3.png",
"ms": 220
}
],
"dark": [
{
"src": "img/ani.sheep.idle.down__dark.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.down__dark.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.down__dark.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.down__dark.3.png",
"ms": 220
}
],
"brown": [
{
"src": "img/ani.sheep.idle.down__brown.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.down__brown.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.down__brown.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.down__brown.3.png",
"ms": 220
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
"src": "img/ani.sheep.idle.left.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.left.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.left.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.left.3.png",
"ms": 220
}
],
"dark": [
{
"src": "img/ani.sheep.idle.left__dark.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.left__dark.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.left__dark.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.left__dark.3.png",
"ms": 220
}
],
"brown": [
{
"src": "img/ani.sheep.idle.left__brown.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.left__brown.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.left__brown.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.left__brown.3.png",
"ms": 220
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
"src": "img/ani.sheep.idle.right.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.right.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.right.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.right.3.png",
"ms": 220
}
],
"dark": [
{
"src": "img/ani.sheep.idle.right__dark.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.right__dark.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.right__dark.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.right__dark.3.png",
"ms": 220
}
],
"brown": [
{
"src": "img/ani.sheep.idle.right__brown.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.right__brown.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.idle.right__brown.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.right__brown.3.png",
"ms": 220
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
"src": "img/ani.sheep.idle.up.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.up.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.idle.up.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.up.3.png",
"ms": 220
}
],
"dark": [
{
"src": "img/ani.sheep.idle.up__dark.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.up__dark.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.idle.up__dark.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.up__dark.3.png",
"ms": 220
}
],
"brown": [
{
"src": "img/ani.sheep.idle.up__brown.0.png",
"ms": 1800
},
{
"src": "img/ani.sheep.idle.up__brown.1.png",
"ms": 160
},
{
"src": "img/ani.sheep.idle.up__brown.2.png",
"ms": 1100
},
{
"src": "img/ani.sheep.idle.up__brown.3.png",
"ms": 220
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
"src": "img/ani.sheep.walk.down.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down.3.png",
"ms": 140
}
],
"dark": [
{
"src": "img/ani.sheep.walk.down__dark.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down__dark.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down__dark.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down__dark.3.png",
"ms": 140
}
],
"brown": [
{
"src": "img/ani.sheep.walk.down__brown.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down__brown.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down__brown.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.down__brown.3.png",
"ms": 140
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
"src": "img/ani.sheep.walk.left.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left.3.png",
"ms": 140
}
],
"dark": [
{
"src": "img/ani.sheep.walk.left__dark.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left__dark.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left__dark.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left__dark.3.png",
"ms": 140
}
],
"brown": [
{
"src": "img/ani.sheep.walk.left__brown.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left__brown.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left__brown.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.left__brown.3.png",
"ms": 140
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
"src": "img/ani.sheep.walk.right.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right.3.png",
"ms": 140
}
],
"dark": [
{
"src": "img/ani.sheep.walk.right__dark.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right__dark.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right__dark.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right__dark.3.png",
"ms": 140
}
],
"brown": [
{
"src": "img/ani.sheep.walk.right__brown.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right__brown.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right__brown.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.right__brown.3.png",
"ms": 140
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
"src": "img/ani.sheep.walk.up.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up.3.png",
"ms": 140
}
],
"dark": [
{
"src": "img/ani.sheep.walk.up__dark.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up__dark.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up__dark.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up__dark.3.png",
"ms": 140
}
],
"brown": [
{
"src": "img/ani.sheep.walk.up__brown.0.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up__brown.1.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up__brown.2.png",
"ms": 140
},
{
"src": "img/ani.sheep.walk.up__brown.3.png",
"ms": 140
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
"src": "img/fish.cod.l.0.png",
"ms": 0
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
"src": "img/fish.cod.m.0.png",
"ms": 0
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
"src": "img/fish.cod.s.0.png",
"ms": 0
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
"src": "img/fish.flounder.l.0.png",
"ms": 0
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
"src": "img/fish.flounder.m.0.png",
"ms": 0
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
"src": "img/fish.flounder.s.0.png",
"ms": 0
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
"src": "img/fish.halibut.l.0.png",
"ms": 0
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
"src": "img/fish.halibut.m.0.png",
"ms": 0
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
"src": "img/fish.halibut.s.0.png",
"ms": 0
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
"src": "img/fish.mackerel.l.0.png",
"ms": 0
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
"src": "img/fish.mackerel.m.0.png",
"ms": 0
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
"src": "img/fish.mackerel.s.0.png",
"ms": 0
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
"src": "img/fish.pollock.l.0.png",
"ms": 0
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
"src": "img/fish.pollock.m.0.png",
"ms": 0
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
"src": "img/fish.pollock.s.0.png",
"ms": 0
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
"src": "img/fish.sculpin.l.0.png",
"ms": 0
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
"src": "img/fish.sculpin.m.0.png",
"ms": 0
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
"src": "img/fish.sculpin.s.0.png",
"ms": 0
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
"lint_totals": {
"errors": 0,
"warnings": 0
}
};
