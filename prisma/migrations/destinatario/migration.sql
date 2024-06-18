-- CreateTable
CREATE TABLE "destinatario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,

    CONSTRAINT "destinatario_pkey" PRIMARY KEY ("id")
);
