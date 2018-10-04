db.flowers.aggregate( [ { $group: { _id: null, count: { $sum: 1 } } } ] )

db.flowers.aggregate([ { $group: { _id: null, summa: { $sum: "$price" } } } ])

db.flowers.aggregate( [ { $sort: { name: 1 } }, { $limit : 3 }  ] )

db.flowers.aggregate([ { $group: { _id: null, max: { $max: "$price" }, min: { $min: "$price" }, avg: { $avg: "$price"} } } ])

98.2

db.flowers.aggregate([ { $match: { price: { $gte: 98.2 } } }, { $group: { _id: null, count: { $sum: 1 } } } ])

db.flowers.aggregate([ { $group: { _id: "$category", count: { $sum: 1 } } } ])

db.flowers.aggregate([ { $match: { category: 'Roses' } }, { $sort: { price: -1 } }, { $limit: 5 } ]);

db.flowers.aggregate([ { $sort: { name: 1 } }, { $skip: 19  }, { $limit: 1 } ]);

db.flowers.aggregate( [ { $match : { category : "Cactus" } }, { $group: { _id: null, summa: { $sum: "$price" } } } ] );

// db.flowers.explain("executionStats").aggregate([ { $group: { _id: "$category", count: { $sum: 1 } } } ])
// db.flowers.explain("executionStats").aggregate([ { $match: { category: 'Roses' } }, { $sort: { price: -1 } }, { $limit: 5 } ]);
// db.flowers.explain("executionStats").aggregate([ { $sort: { name: 1 } }, { $skip: 19  }, { $limit: 1 } ]);
