-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-08-2025 a las 23:04:55
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejercicio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `trabajo` text NOT NULL,
  `edad` int NOT NULL,
  `salario` int NOT NULL,
  `mail` text NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior\r\n', 32, 120000, '_juanhagan@bignet.com\r\n'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, 110000, 'g_pillai@bignet.com\r\n'),
(3, 'Ana', 'Dharma', 'Desarrollador Web\r\n', 27, 90000, 'ana@bignet.com\r\n'),
(4, 'Maria', 'Anchor', 'Desarrollador Web\r\n', 26, 85000, 'mary@bignet.com\r\n'),
(5, 'Juan', 'Agüero', 'Programador', 36, 85000, 'juan@bignet.com'),
(6, 'Eduardo', 'Sacan', 'Programador', 25, 85000, 'eddi@bignet.com'),
(7, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(8, 'Juan', 'Agüero', 'Programador', 36, 85000, 'juan@bignet.com'),
(28, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com'),
(10, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(11, 'Eduardo', 'Sacan', 'Programador', 25, 85000, 'eddi@bignet.com'),
(12, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(13, 'Eduardo', 'Sacan', 'Programador', 25, 85000, 'eddi@bignet.com'),
(14, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(15, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, 90000, 'hernan@bignet.com'),
(16, 'Pablo', 'Simon', 'Especialista Multimedia', 43, 85000, 'ps@bignet.com'),
(17, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 75000, 'arturo@bignet.com'),
(18, 'Jimena', 'Cazado', 'Diseñador Web', 32, 110000, 'jimena@bignet.com'),
(19, 'Roberto', 'Luis', 'Administrador de sistemas', 35, 100000, 'roberto@bignet.com'),
(20, 'Daniel', 'Gutierrez', 'Administrador de sistemas', 34, 900000, 'daniel@bignet.com'),
(21, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, 120000, ' miguel@bignet.com'),
(22, 'Monica', 'Sanchez', 'Ejecutivo de ventas', 30, 90000, 'monica@bignet.com'),
(23, 'Alicia', 'Simlai', 'Ejecutivo de ventas', 27, 70000, 'alicia@bignet.com'),
(24, 'Jose', 'Iriarte', 'Ejecutivo de ventas', 27, 72000, 'jose@bignet.com'),
(25, 'Sabrina', 'Allende', 'Gerente de Soporte tecnico', 32, 200000, 'sabrina@bignet.com'),
(26, 'Pedro', 'Campeon', 'Gerente de finanzas', 36, 220000, 'pedro@bignet.com'),
(27, 'Mariano', 'Dharma', 'Presidente', 28, 300000, 'mariano@bignet.com'),
(29, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com'),
(31, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'NOVEDAD 1', 'Esta es la Primer novedad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(2, 'Segunda Novedad', 'Esta es la Segunda novedad', 'Chalk and cheese camembert de normandie the big cheese. Hard cheese everyone loves pepper jack squirty cheese blue castello cauliflower cheese caerphilly smelly cheese. Cheddar parmesan boursin cheese slices cheesy feet cheese slices bocconcini manchego. Squirty cheese cream cheese squirty cheese feta babybel fromage frais the big cheese the big cheese. Cauliflower cheese monterey jack smelly cheese parmesan.'),
(6, 'SEXTA', '6', 'roku'),
(4, 'Cuarta Novedad', 'Cuarta Novedad', 'Cuarta Novedad'),
(5, 'La Quinta Novedad', 'La Quinta Novedad', 'La Quinta Novedad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'jorge', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
