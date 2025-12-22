using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddPriceAndVolumeFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Volume",
                table: "Dishes",
                newName: "VolumeInfo");

            migrationBuilder.AddColumn<string>(
                name: "BasePrice",
                table: "Dishes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PriceInfo",
                table: "Dishes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "EggAddons",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EggAddons", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EggDishes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EggDishes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EggDishAddons",
                columns: table => new
                {
                    EggAddonId = table.Column<int>(type: "int", nullable: false),
                    EggDishId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EggDishAddons", x => new { x.EggAddonId, x.EggDishId });
                    table.ForeignKey(
                        name: "FK_EggDishAddons_EggAddons_EggAddonId",
                        column: x => x.EggAddonId,
                        principalTable: "EggAddons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EggDishAddons_EggDishes_EggDishId",
                        column: x => x.EggDishId,
                        principalTable: "EggDishes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EggDishAddons_EggDishId",
                table: "EggDishAddons",
                column: "EggDishId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EggDishAddons");

            migrationBuilder.DropTable(
                name: "EggAddons");

            migrationBuilder.DropTable(
                name: "EggDishes");

            migrationBuilder.DropColumn(
                name: "BasePrice",
                table: "Dishes");

            migrationBuilder.DropColumn(
                name: "PriceInfo",
                table: "Dishes");

            migrationBuilder.RenameColumn(
                name: "VolumeInfo",
                table: "Dishes",
                newName: "Volume");
        }
    }
}
