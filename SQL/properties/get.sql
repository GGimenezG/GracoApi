CREATE PROCEDURE `properties_get`(
	IN iId INT,
	IN iIdClient INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.    
    CALL validateSession(iToken, iUser, @respuesta);
	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN -- Si la sesión es valida
		IF iId = 0 THEN -- Si id es 0 consulto todas los registros del cliente
			SELECT p.idProperties as id, p.description, p.address, p.latitude, p.longitude, p.isUsed, p.squareMeter, p.isFurnished,
				   p.connectorForWashingMachine, p.orientation, p.antiquity, p.hasAPool, p.hasAGrill, p.hasABikeRack, p.hasAEventHall, p.condominium, 
                   p.hasATerrace, p.commonExpenses, p.squareMetersOfLand,
                   p.Clients_idClients as idClients, p.Communes_idCommunes as idCommunes, p.ParkingLots_idParkingLots as idParkingLots,
                   p.Cellars_idCellars as idCellars, p.Bathrooms_idBathrooms1 as idBathrooms, p.Bedrooms_idBedrooms as idBedrooms, p.Coins_idCoins as idCoins,
                   pi.url as principalImage, 
                   p.price, p.urlMatterport , p.refLongitude , p.refLatitude, p.idPost, p.portNumber
			FROM properties p 
            INNER JOIN propertiesimages pi on pi.idProperty = p.idProperties and pi.order = 1
			WHERE p.status = 'A' and p.Clients_idClients = iIdClient;
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE -- Si el id es distinto a 0 consulto solo esa categoría
				SELECT p.idProperties as id, p.description, p.address, p.latitude, p.longitude, p.isUsed, p.squareMeter, p.isFurnished, 
					   p.connectorForWashingMachine, p.orientation, p.antiquity, p.hasAPool, p.hasAGrill, p.hasABikeRack, p.hasAEventHall, p.condominium, 
					   p.hasATerrace, p.commonExpenses, p.squareMetersOfLand,
					   p.Clients_idClients as idClients, p.Communes_idCommunes as idCommunes, p.ParkingLots_idParkingLots as idParkingLots,
					   p.Cellars_idCellars as idCellars, p.Bathrooms_idBathrooms1 as idBathrooms, p.Bedrooms_idBedrooms as idBedrooms, p.Coins_idCoins as idCoins,
					   pi.url as principalImage,
                       p.price, p.urlMatterport , p.refLongitude , p.refLatitude, p.idPost, p.portNumber
				FROM properties p 
				left JOIN propertiesimages pi on pi.idProperty = p.idProperties and pi.order = 1
				WHERE p.status = 'A' 
				and p.idProperties = iId 
				and p.Clients_idClients = iIdClient;
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oRes as success, oMessage as message;
END