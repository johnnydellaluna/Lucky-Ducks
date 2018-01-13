var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9_.-]*$/g,
        len: [1,40]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,40]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,99]
      }
    },
    logs_site_A: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    logs_site_B: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_wins: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_losses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    timestamps: false,
    freezeTableName: true
  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;

//     User.associate = function(models) {
//     // Associating User with Expenses and Income
//     // When an User is deleted, also delete any associated Expenses and Income
//     User.hasMany(models.Income, {
//       onDelete: "cascade"
//     });
//     User.hasMany(models.Expenses, {
//       onDelete: "cascade"
//     });
//   };
//   return User;
};