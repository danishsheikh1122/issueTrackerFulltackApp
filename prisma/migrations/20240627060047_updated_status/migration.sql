/*
  Warnings:

  - You are about to alter the column `status` on the `issue` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE `issue` MODIFY `status` VARCHAR(30) NOT NULL;
