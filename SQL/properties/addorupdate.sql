CREATE PROCEDURE `properties_addOrUpdate`(
	IN iId INT,
    IN iDescription VARCHAR(1200),
    IN iAddress varchar(45),
    IN iPortNumber int(11),
    IN iLatitude double,
    IN iLongitude double,
	IN IOrientation varchar(45),
    IN iSquareMeter double,
    IN iSquareMetersOfLand double,
    IN iUsed BOOLEAN,
    IN iAntiquity varchar(40),
    IN iFurnished BOOLEAN,
    IN iTerrace BOOLEAN,
    IN iPool BOOLEAN,
    IN iGrill BOOLEAN,
    IN iBikeRack BOOLEAN,
    IN iEventHall BOOLEAN,
    IN iConnectorForWashingMachine BOOLEAN,
    IN iCondominium varchar(45),
    IN iCommonExpenses varchar(45),
    IN iIdCoins INT,
    IN iIdBedrooms INT,
    IN iIdBathrooms INT,
    IN iIdCellars INT,
    IN iIdParkingLots INT,
    IN iIdCommunes INT,
    IN iIdClients INT,
    IN iPrice DOUBLE,
    IN iUrlMatterport TEXT,
    IN iRefLongitude double,
    IN iRefLatitude double,
    IN iIdPost INT,
	IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE vValidType INT;
    DECLARE vValidCategory INT;
    DECLARE oId INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET oRes = 0;
        SET oMessage = 'Error ';
		SELECT oRes as success, oMessage as message;
    END;
    -- Validar la sesion según el token y el usuario ingresado.
    CALL validateSession(iToken, iUser, @respuesta);
	SELECT @respuesta INTO vValid from dual;
    -- Si la sesión es valida
    IF vValid = 1 THEN
		-- si el id es 0, agrego uno nuevo, si es mayor a cero actualizo el registro
        IF iId > 0 THEN
			UPDATE properties
			SET
			`Coins_idCoins` = iIdCoins,
			`Bedrooms_idBedrooms` = iIdBedrooms,
			`Bathrooms_idBathrooms1` = iIdBathrooms,
			`description` = iDescription,
			`address` = iAddress,
			`latitude` = iLatitude,
			`longitude` = iLongitude,
			`portNumber` = iPortNumber,
			`Cellars_idCellars` = iIdCellars,
			`ParkingLots_idParkingLots` = iIdParkingLots,
			`updatedAt` = NOW(),
			`Communes_idCommunes` = iIdCommunes,
			`isUsed` = iUsed,
			`squareMeter` = iSquareMeter,
			`isFurnished` = iFurnished,
			`connectorForWashingMachine` = iConnectorForWashingMachine,
			`orientation` = IOrientation,
			`antiquity` = iAntiquity,
			`hasAPool` = iPool,
			`hasAGrill` = iGrill,
			`hasABikeRack` = iBikeRack,
			`hasAEventHall` = iEventHall,
			`condominium` = iCondominium,
			`hasATerrace` = iTerrace,
			`commonExpenses` = iCommonExpenses,
			`Clients_idClients` = iIdClients,
			`squareMetersOfLand` = iSquareMetersOfLand,
            `price` = iPrice,
			`urlMatterport` = iUrlMatterport,
			`refLongitude` = iRefLongitude,
			`refLatitude` = iRefLatitude,
            `idPost` = iIdPost
			WHERE `idProperties` = iId;
			SET oRes = 1;
            SET oId = iId;
			SET oMessage = 'Record updated successfully';
            
		ELSE
			INSERT INTO properties 
			(
				`Coins_idCoins`,
				`Bedrooms_idBedrooms`,
				`Bathrooms_idBathrooms1`,
				`description`,
				`address`,
				`latitude`,
				`longitude`,
				`portNumber`,
				`Cellars_idCellars`,
				`ParkingLots_idParkingLots`,
				`createdAt`,
				`status`,
				`Communes_idCommunes`,
				`isUsed`,
				`squareMeter`,
				`isFurnished`,
				`connectorForWashingMachine`,
				`orientation`,
				`antiquity`,
				`hasAPool`,
				`hasAGrill`,
				`hasABikeRack`,
				`hasAEventHall`,
				`condominium`,
				`hasATerrace`,
				`commonExpenses`,
				`Clients_idClients`,
				`squareMetersOfLand`,
                `price`,
				`urlMatterport`,
				`refLongitude`,
				`refLatitude`,
                `idPost`
			)
			VALUES
			(
				iIdCoins,
				iIdBedrooms,
				iIdBathrooms,
				iDescription,
				iAddress,
				iLatitude,
				iLongitude,
				iPortNumber,
				iIdCellars,
				iIdParkingLots,
				NOW(),
                'A',
				iIdCommunes,
				iUsed,
				iSquareMeter,
				iFurnished,
				iConnectorForWashingMachine,
				IOrientation,
				iAntiquity,
				iPool,
				iGrill,
				iBikeRack,
				iEventHall,
				iCondominium,
				iTerrace,
				iCommonExpenses,
				iIdClients,
				iSquareMetersOfLand,
                iPrice,
                iUrlMatterport,
                iRefLongitude,
                iRefLatitude,
                iIdPost
			);
            SET oId = LAST_INSERT_ID();
            
			SET oRes = 1;
			SET oMessage = 'Record added successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	SELECT oId as id, oRes as success, oMessage as message;
END