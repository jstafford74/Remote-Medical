/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const Patients = sequelize.define('Patients', {
        'patient_ID': {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            comment: "null"
        },
        'patient_FirstName': {
            type: DataTypes.STRING(64),
            allowNull: false,
            defaultValue: '',
            comment: "null"
        },
        'patient_LastName': {
            type: DataTypes.STRING(64),
            allowNull: false,
            defaultValue: '',
            comment: "null"
        },
        'pPInfo_DOB': {
            type: DataTypes.STRING(15),
            allowNull: false,
            defaultValue: '',
            comment: "null"
        },
        'pPInfo_DOB_year': {
            type: "YEAR(4)",
            allowNull: true,
            comment: "null"
        },
        'pPInfo_DOB_month': {
            type: DataTypes.DATEONLY,
            allowNull: true,
            comment: "null"
        },
        'pAddr_Zip': {
            type: DataTypes.STRING(25),
            allowNull: false,
            defaultValue: '',
            comment: "null"
        },
        'pPInfo_Email': {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: '',
            comment: "null"
        }
    }, {
        tableName: 'Patients',
        timestamps: false
    });
    return Patients
};
