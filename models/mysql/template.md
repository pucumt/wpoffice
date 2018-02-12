const db = require('../../db'),
    config = require('../../settings');

const #Name# = db.defineModel('#name#s', {
    name: {
        type: db.STRING(20)
    }
});
module.exports = #Name#;

#Name#.getFilter = function (filter) {
    filter.isDeleted = false;
    return #Name#.findOne({
        'where': filter
    });
};

#Name#.getFilters = function (filter) {
    filter.isDeleted = false;
    return #Name#.findAll({
        'where': filter,
        order: [
            ['createdDate'],
            ['_id']
        ]
    });
};

#Name#.getFiltersWithPage = function (page, filter) {
    filter.isDeleted = false;
    return #Name#.findAndCountAll({
        'where': filter,
        order: [
            ['createdDate'],
            ['_id']
        ],
        offset: config.pageSize * (page - 1),
        limit: config.pageSize
    });
};