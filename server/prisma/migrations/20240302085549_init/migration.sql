-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "decription" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
